import { Component, Input } from '@angular/core';

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
}