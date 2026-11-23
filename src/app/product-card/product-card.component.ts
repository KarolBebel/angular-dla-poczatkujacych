import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() bought = new EventEmitter<number>();
  @Output() removed = new EventEmitter<number>();
}