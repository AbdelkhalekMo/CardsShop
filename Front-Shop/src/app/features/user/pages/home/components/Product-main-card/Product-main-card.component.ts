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
    // Handle image loading error
    event.target.style.display = 'none';
    console.warn('Failed to load image:', this.imageUrl);
  }
}