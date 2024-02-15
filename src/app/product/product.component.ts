import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Product } from '../modules/productKlasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() 
  product: Product = {} as Product;
}
