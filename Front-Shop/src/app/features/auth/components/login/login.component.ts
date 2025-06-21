import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  showPassword = false;
  currentLanguage: 'ar' | 'en' = 'en';
  private languageSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.loginForm = this.fb.group({
      emailOrUsername: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
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
      welcome: this.currentLanguage === 'ar' ? 'أهلاً وسهلاً بك' : 'Welcome Back',
      subtitle: this.currentLanguage === 'ar' ? 'سجل دخولك للوصول إلى UpCodea' : 'Sign in to access UpCodea',
      emailPlaceholder: this.currentLanguage === 'ar' ? 'الاسم أو البريد الإلكتروني' : 'Username or Email',
      passwordPlaceholder: this.currentLanguage === 'ar' ? 'كلمة المرور' : 'Password',
      requiredField: this.currentLanguage === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required',
      passwordLength: this.currentLanguage === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters',
      rememberMe: this.currentLanguage === 'ar' ? 'تذكرني في المرة القادمة' : 'Remember me',
      showPassword: this.currentLanguage === 'ar' ? 'إظهار كلمة المرور' : 'Show password',
      hidePassword: this.currentLanguage === 'ar' ? 'إخفاء كلمة المرور' : 'Hide password',
      loginButton: this.currentLanguage === 'ar' ? 'تسجيل الدخول' : 'Sign In',
      forgotPassword: this.currentLanguage === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot Password?',
      noAccount: this.currentLanguage === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?",
      createAccount: this.currentLanguage === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account'
    };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Here you would typically call your auth service
      console.log('Login form submitted:', this.loginForm.value);
    }
  }
}
