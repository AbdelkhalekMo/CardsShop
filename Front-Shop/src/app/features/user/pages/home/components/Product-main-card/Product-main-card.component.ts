import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-main-card',
  templateUrl: './Product-main-card.component.html',
  styleUrls: ['./Product-main-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductMainCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';

  onCardClick(): void {
    // Implement card click logic here
    console.log('Card clicked:', this.title);
  }

  onImageError(event: any): void {
    // Handle image loading error with fallback
    event.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80';
    console.warn('Failed to load image, using fallback:', this.imageUrl);
  }
}