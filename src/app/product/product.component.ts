import { Component, Input } from '@angular/core';
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

  isHovered = false;

  // hover() {
  //   $('#test').attr("src", this.product.picUrl2);
  // }


  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isHovered = false;
  // }

  //NE RABOTI HOVER TREBA DA SE POPRAVI
  
  hover() {
    console.log("USPESHNO");
    this.isHovered = false;
  }

  unhover() {
    this.isHovered = true;
  }
}
