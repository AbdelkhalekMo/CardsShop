import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnDestroy {
  currentLanguage: 'ar' | 'en' = 'ar';
  private langSub: Subscription;

  translations = {
    ar: {
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      features: 'الميزات',
      howItWorks: 'كيف يعمل',
      contact: 'اتصل بنا',
      legal: 'القانونية',
      terms: 'الشروط والأحكام',
      privacy: 'سياسة الخصوصية',
      refund: 'سياسة الاسترداد',
      cookies: 'سياسة ملفات تعريف الارتباط',
      payment: 'طرق الدفع',
      rights: 'جميع الحقوق محفوظة.',
      designedBy: 'تم التصميم بواسطة',
      company: 'UpCodea',
      email: 'support@upcodea.com',
      allRights: '© 2025 UpCodea. جميع الحقوق محفوظة.'
    },
    en: {
      quickLinks: 'Quick Links',
      home: 'Home',
      features: 'Features',
      howItWorks: 'How It Works',
      contact: 'Contact Us',
      legal: 'Legal',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
      cookies: 'Cookie Policy',
      payment: 'Payment Methods',
      rights: 'All rights reserved.',
      designedBy: 'Designed by',
      company: 'UpCodea',
      email: 'support@upcodea.com',
      allRights: '© 2025 UpCodea. All rights reserved.'
    }
  };

  get texts() {
    return this.translations[this.currentLanguage];
  }

  constructor(private languageService: LanguageService) {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
  }
}