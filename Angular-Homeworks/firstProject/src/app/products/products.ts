import { Component } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'      
})
export class Products {
  productsList: Product[] = [
    {
      id: 1,
      title: 'MacBook Air M3',
      price: 3400,
      category: 'Laptops',
      inStock: true
    },
    {
      id: 2,
      title: 'iPhone 15 Pro',
      price: 2950,
      category: 'Smartphones',
      inStock: true
    },
    {
      id: 3,
      title: 'Sony WH-1000XM5',
      price: 950,
      category: 'Audio',
      inStock: false
    },
    {
      id: 4,
      title: 'Logitech MX Master 3S',
      price: 320,
      category: 'Accessories',
      inStock: true
    }
  ];
}