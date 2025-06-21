import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMainContainerComponent, ProductData } from '../category-main-container/category-main-container.component';

export interface CategoryData {
  id: string;
  title: string;
  products: ProductData[];
}

@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.css'],
  standalone: true,
  imports: [CommonModule, CategoryMainContainerComponent],
})
export class MainPageContainerComponent {
  @Input() categories: CategoryData[] = [{
      id: '1',
      title: 'Gift Cards',
      products: [
        {
          id: '1-1',
          imageUrl: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Game+Power+7',
          title: 'Game Power 7'
        },
        {
          id: '1-2',
          imageUrl: 'https://via.placeholder.com/300x200/2196f3/ffffff?text=PlayStation',
          title: 'PlayStation Store Cards'
        },
        {
          id: '1-3',
          imageUrl: 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=OffGamers',
          title: 'OffGamers Gift Card'
        },
        {
          id: '1-4',
          imageUrl: 'https://via.placeholder.com/300x200/e91e63/ffffff?text=iTunes',
          title: 'iTunes Gift Card'
        }
      ]
    },
    {
      id: '2',
      title: 'Games',
      products: [
        {
          id: '2-1',
          imageUrl: 'https://via.placeholder.com/300x200/4caf50/ffffff?text=Roblox',
          title: 'Roblox Digital Gift Card '
        },
        {
          id: '2-2',
          imageUrl: 'https://via.placeholder.com/300x200/ff9800/ffffff?text=Free+Fire',
          title: 'Free Fire Max'
        },
        {
          id: '2-3',
          imageUrl: 'https://via.placeholder.com/300x200/9c27b0/ffffff?text=Yareel',
          title: 'Yareel Gift Cards'
        },
        {
          id: '2-4',
          imageUrl: 'https://via.placeholder.com/300x200/607d8b/ffffff?text=Blood+Strike',
          title: 'Blood Strike'
        }
      ]
    },
    {
      id: '3',
      title: 'Software & Apps',
      products: [
        {
          id: '3-1',
          imageUrl: 'https://via.placeholder.com/300x200/f44336/ffffff?text=Adobe',
          title: 'Adobe Creative Suite'
        },
        {
          id: '3-2',
          imageUrl: 'https://via.placeholder.com/300x200/0078d4/ffffff?text=Office+365',
          title: 'Microsoft Office 365'
        }
      ]
    },
    {
      id: '4',
      title: 'Payment Cards',
      products: [
        {
          id: '4-1',
          imageUrl: 'https://via.placeholder.com/300x200/1a237e/ffffff?text=Visa',
          title: 'Visa Gift Card'
        },
        {
          id: '4-2',
          imageUrl: 'https://via.placeholder.com/300x200/ff5722/ffffff?text=Mastercard',
          title: 'Mastercard Gift Card'
        },
        {
          id: '4-3',
          imageUrl: 'https://via.placeholder.com/300x200/0070ba/ffffff?text=PayPal',
          title: 'PayPal Gift Card'
        }
        
      ]
    }];

  trackByCategoryId(index: number, category: CategoryData): string {
    return category.id;
  }
}