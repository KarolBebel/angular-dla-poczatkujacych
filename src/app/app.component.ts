import { Component } from '@angular/core';
import { Product, ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'Kawa ziarnista 1kg', price: 49.99, description: 'Nuty czekolady i orzechów.', available: true },
    { id: 2, name: 'Herbata zielona 100g', price: 24.50, description: 'Sencha z Japonii.', available: true },
    { id: 3, name: 'Młynek ręczny', price: 129.00, description: 'Stal nierdzewna, regulacja ziarna.', available: false },
  ];

  boughtCount = 0;

  onBought(id: number): void {
    this.boughtCount++;
  }

  onRemoved(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}