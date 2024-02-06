import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOTHES } from '../data-base/clothesDB';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css'
})
export class ClothesComponent {

  clothes = CLOTHES; 
}
