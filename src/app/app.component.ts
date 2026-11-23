import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
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

  buy(): void {
    this.boughtCount++;
  }

  remove(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}