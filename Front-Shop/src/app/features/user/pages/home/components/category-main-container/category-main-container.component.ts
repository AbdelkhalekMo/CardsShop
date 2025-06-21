import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainCardComponent } from '../Product-main-card/Product-main-card.component';
import { LanguageService } from '../../../../../../services/language.service';
import { Subscription } from 'rxjs';

export interface ProductData {
  id: string;
  imageUrl: string;
  title: string;
}

@Component({
  selector: 'app-category-main-container',
  templateUrl: './category-main-container.component.html',
  styleUrls: ['./category-main-container.component.css'],
  standalone: true,
  imports: [CommonModule, ProductMainCardComponent],
})
export class CategoryMainContainerComponent implements OnInit, OnDestroy {
  @Input() categoryTitle: string = '';
  @Input() products: ProductData[] = [];

  currentLanguage: 'ar' | 'en' = 'en';
  private languageSubscription: Subscription = new Subscription();

  // Calculate empty slots to maintain grid structure (always show 4 slots)
  get emptySlots(): any[] {
    const emptyCount = Math.max(0, 4 - this.products.length);
    return new Array(emptyCount);
  }

  constructor(private languageService: LanguageService) {}

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

  get viewAllText(): string {
    return this.currentLanguage === 'ar' ? 'عرض جميع المنتجات' : 'View all';
  }

  get isRTL(): boolean {
    return this.currentLanguage === 'ar';
  }

  onViewAllClick() {
    // Handle view all click
    console.log(`View all clicked for category: ${this.categoryTitle}`);
  }

  trackByProductId(index: number, product: ProductData): string {
    return product.id;
  }
}