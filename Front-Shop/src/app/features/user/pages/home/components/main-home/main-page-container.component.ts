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
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Game Power 7'
        },
        {
          id: '1-2',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'PlayStation Store Cards'
        },
        {
          id: '1-3',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'OffGamers Gift Card'
        },
        {
          id: '1-4',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
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
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Pubg Mobile '
        },
        {
          id: '2-2',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Free Fire Max'
        },
        {
          id: '2-3',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Valorant'
        },
        {
          id: '2-4',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
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
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Adobe Creative Suite'
        },
        {
          id: '3-2',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
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
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Visa Gift Card'
        },
        {
          id: '4-2',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'Mastercard Gift Card'
        },
        {
          id: '4-3',
          imageUrl: 'https://recharge-prd.asset.akeneo.cloud/product_assets/media/recharge_com_pubg_product_card.png',
          title: 'PayPal Gift Card'
        }
        
      ]
    }];

  trackByCategoryId(index: number, category: CategoryData): string {
    return category.id;
  }
}