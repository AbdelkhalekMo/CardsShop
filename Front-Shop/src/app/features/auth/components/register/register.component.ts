import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  currentLanguage: 'ar' | 'en' = 'en';
  private languageSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      country: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.language$.subscribe(
      (language: 'ar' | 'en') => {
        this.currentLanguage = language;
      }
    );
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  get isRTL(): boolean {
    return this.currentLanguage === 'ar';
  }

  get texts() {
    return {
      welcome: this.currentLanguage === 'ar' ? 'انضم إلينا الآن' : 'Join Us Now',
      subtitle: this.currentLanguage === 'ar' ? 'أنشئ حسابك الجديد للاستمتاع بأفضل أسعار البطاقات' : 'Create your new account to enjoy the best card prices',
      firstName: this.currentLanguage === 'ar' ? 'الاسم الأول' : 'First Name',
      lastName: this.currentLanguage === 'ar' ? 'اسم العائلة' : 'Last Name',
      email: this.currentLanguage === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
      password: this.currentLanguage === 'ar' ? 'كلمة المرور' : 'Password',
      confirmPassword: this.currentLanguage === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password',
      selectCountry: this.currentLanguage === 'ar' ? 'اختر الدولة' : 'Select Country',
      firstNameError: this.currentLanguage === 'ar' ? 'الاسم الأول مطلوب (حرفين على الأقل)' : 'First name is required (at least 2 characters)',
      lastNameError: this.currentLanguage === 'ar' ? 'اسم العائلة مطلوب (حرفين على الأقل)' : 'Last name is required (at least 2 characters)',
      emailError: this.currentLanguage === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address',
      passwordError: this.currentLanguage === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters',
      passwordMismatch: this.currentLanguage === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match',
      countryError: this.currentLanguage === 'ar' ? 'يرجى اختيار الدولة' : 'Please select your country',
      termsText: this.currentLanguage === 'ar' ? 'أوافق على' : 'I agree to the',
      termsLink: this.currentLanguage === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions',
      termsError: this.currentLanguage === 'ar' ? 'يجب الموافقة على الشروط والأحكام للمتابعة' : 'You must agree to the terms and conditions to continue',
      showPassword: this.currentLanguage === 'ar' ? 'إظهار كلمة المرور' : 'Show password',
      hidePassword: this.currentLanguage === 'ar' ? 'إخفاء كلمة المرور' : 'Hide password',
      registerButton: this.currentLanguage === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account',
      haveAccount: this.currentLanguage === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?',
      signIn: this.currentLanguage === 'ar' ? 'تسجيل الدخول' : 'Sign In',
      countries: {
        egypt: this.currentLanguage === 'ar' ? '🇪🇬 مصر' : '🇪🇬 Egypt',
        saudi: this.currentLanguage === 'ar' ? '🇸🇦 السعودية' : '🇸🇦 Saudi Arabia',
        uae: this.currentLanguage === 'ar' ? '🇦🇪 الإمارات' : '🇦🇪 UAE',
        kuwait: this.currentLanguage === 'ar' ? '🇰🇼 الكويت' : '🇰🇼 Kuwait',
        qatar: this.currentLanguage === 'ar' ? '🇶🇦 قطر' : '🇶🇦 Qatar'
      }
    };
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Register form submitted:', this.registerForm.value);
    }
  }
}
