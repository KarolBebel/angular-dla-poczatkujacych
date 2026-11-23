import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  product = {
    id: 1,
    name: 'Kawa ziarnista 1kg',
    price: 49.99,
    description: 'Palona w małej palarni, nuty czekolady i orzechów.',
    available: true
  };

  boughtCount = 0;

  buy(): void {
    this.boughtCount++;
  }
}