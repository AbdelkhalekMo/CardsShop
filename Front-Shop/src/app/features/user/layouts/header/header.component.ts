import { Component, HostBinding, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

interface AppState {
  language: string;
  region: string;
  currency: string;
}

interface Translation {
  lang: string;
  storeName: string;
  categories: string;
  searchPlaceholder: string;
  login: string;
  register: string;
  modalTitle: string;
  region: string;
  language: string;
  currency: string;
  save: string;
  giftCards: string;
  games: string;
  software: string;
  payment: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  @HostBinding('class') get hostClass() {
    return this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }

  showCategoryDropdown = false;
  showModal = false;
  showMobileMenu = false;
  showMobileCategoryDropdown = false;
  
  // Navbar scroll behavior
  isNavbarVisible = true;
  private lastScrollTop = 0;
  private scrollTimeout: any;

  currentLanguage: 'ar' | 'en' = 'ar';
  private langSub: Subscription;

  appState: AppState = {
    language: 'ar',
    region: 'global',
    currency: 'egp'
  };

  selectedLanguage = 'ar';
  selectedRegion = 'global';
  selectedCurrency = 'egp';

  private translations: Record<string, Translation> = {
    ar: {
      lang: 'عربي',
      storeName: 'Upcodea',
      categories: 'الفئات',
      searchPlaceholder: 'البحث عن المنتجات...',
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      modalTitle: 'الإعدادات الإقليمية',
      region: 'المنطقة',
      language: 'اللغة',
      currency: 'العملة',
      save: 'حفظ الإعدادات',
      giftCards: 'بطاقات الهدايا',
      games: 'الألعاب',
      software: 'البرامج والتطبيقات',
      payment: 'بطاقات الدفع'
    },
    en: {
      lang: 'English',
      storeName: 'Upcodea',
      categories: 'Categories',
      searchPlaceholder: 'Search products...',
      login: 'Login',
      register: 'Register',
      modalTitle: 'Regional Settings',
      region: 'Region',
      language: 'Language',
      currency: 'Currency',
      save: 'Save Settings',
      giftCards: 'Gift Cards',
      games: 'Games',
      software: 'Software & Apps',
      payment: 'Payment Cards'
    }
  };

  constructor(private languageService: LanguageService) {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
      this.selectedLanguage = lang;
      this.updateLanguage();
    });
  }

  get texts(): Translation {
    return this.translations[this.currentLanguage];
  }

  ngOnInit() {
    // Initialize with default values
    this.selectedLanguage = this.currentLanguage;
    this.selectedRegion = this.appState.region;
    this.selectedCurrency = this.appState.currency;
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  toggleCategoryDropdown(event: Event) {
    event.stopPropagation();
    this.showCategoryDropdown = !this.showCategoryDropdown;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.showMobileMenu = false;
    document.body.style.overflow = 'auto';
  }

  toggleMobileCategoryDropdown() {
    this.showMobileCategoryDropdown = !this.showMobileCategoryDropdown;
  }

  openModal() {
  this.showModal = true;
  // Force re-render
  setTimeout(() => {
    document.body.style.overflow = 'hidden';
  }, 0);
}

closeModal() {
  this.showModal = false;
  document.body.style.overflow = 'auto';
}

  closeModalOnOverlay(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  saveSettings() {
    this.languageService.setLanguage(this.selectedLanguage as 'ar' | 'en');
    this.appState.language = this.selectedLanguage;
    this.appState.region = this.selectedRegion;
    this.appState.currency = this.selectedCurrency;
    this.closeModal();
  }

  private updateLanguage() {
    const isRTL = this.currentLanguage === 'ar';
    document.documentElement.lang = this.currentLanguage;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    
    // Close category dropdown when clicking outside
    if (this.showCategoryDropdown) {
      const categoryBtn = document.querySelector('.category-btn');
      const categoryDropdown = document.querySelector('.dropdown-menu');
      
      if (categoryBtn && categoryDropdown && 
          !categoryBtn.contains(target) && 
          !categoryDropdown.contains(target)) {
        this.showCategoryDropdown = false;
      }
    }

    // Close mobile menu when clicking outside
    if (this.showMobileMenu) {
      const mobileToggle = document.querySelector('.mobile-toggle');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (mobileToggle && mobileMenu && 
          !mobileToggle.contains(target) && 
          !mobileMenu.contains(target)) {
        this.closeMobileMenu();
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showCategoryDropdown = false;
      this.showModal = false;
      this.closeMobileMenu();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide navbar while scrolling
    this.isNavbarVisible = false;
    
    // Clear existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Show navbar again after scrolling stops
    this.scrollTimeout = setTimeout(() => {
      this.isNavbarVisible = true;
    }, 150);
    
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  }
}