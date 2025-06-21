import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-whatsapp-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-support.component.html',
  styleUrls: ['./whatsapp-support.component.css']
})
export class WhatsappSupportComponent implements OnInit, OnDestroy {
  isVisible = false;
  currentLanguage: 'ar' | 'en' = 'ar';
  private langSub: Subscription;

  // WhatsApp Configuration - CUSTOMIZE THESE VALUES
  private whatsappNumber = '+201157299077'; // Updated WhatsApp number
  
  // Multilingual messages
  private messages = {
    ar: 'مرحباً! أحتاج إلى مساعدة في خدماتكم.',
    en: 'Hello! I need support with your services.'
  };

  // Multilingual tooltip text
  private tooltipTexts = {
    ar: 'تحتاج مساعدة؟ تحدث معنا!',
    en: 'Need Help? Chat with us!'
  };

  constructor(private languageService: LanguageService) {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnInit() {
    // Show button after a short delay for better UX
    setTimeout(() => {
      this.isVisible = true;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  get tooltipText(): string {
    return this.tooltipTexts[this.currentLanguage];
  }

  get isRTL(): boolean {
    return this.currentLanguage === 'ar';
  }

  openWhatsApp() {
    const message = this.messages[this.currentLanguage];
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  }
}
