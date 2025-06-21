import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WhatsappSupportComponent } from './layouts/whatsapp-support/whatsapp-support.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappSupportComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'Front-Shop';
  
  // Language state management
  currentLanguage: 'ar' | 'en' = 'ar'; // Default to Arabic
  
  ngOnInit() {
    // Initialize with default language
    this.updateDirection();
  }
  
  /**
   * Updates the document direction and language attributes
   */
  private updateDirection() {
    const isRTL = this.currentLanguage === 'ar';
    
    // Update body class for CSS styling
    document.body.className = isRTL ? 'rtl' : 'ltr';
    
    // Update HTML direction attribute
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update HTML language attribute
    document.documentElement.lang = this.currentLanguage;
  }
  
  /**
   * Switches between Arabic (RTL) and English (LTR)
   * @param language - The target language ('ar' or 'en')
   */
  switchLanguage(language: 'ar' | 'en') {
    this.currentLanguage = language;
    this.updateDirection();
    
    // Optional: Save to localStorage for persistence
    localStorage.setItem('selectedLanguage', language);
  }
  
  /**
   * Gets the current language
   * @returns Current language code
   */
  getCurrentLanguage(): 'ar' | 'en' {
    return this.currentLanguage;
  }
  
  /**
   * Checks if current direction is RTL
   * @returns true if RTL, false if LTR
   */
  isRTL(): boolean {
    return this.currentLanguage === 'ar';
  }
  
  /**
   * Loads saved language preference from localStorage
   */
  private loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') as 'ar' | 'en';
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      this.currentLanguage = savedLanguage;
    }
  }
  
  constructor() {
    // Load saved language preference on app initialization
    this.loadSavedLanguage();
  }
}