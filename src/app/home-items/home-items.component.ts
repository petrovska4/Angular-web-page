import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOMEITEMS } from '../data-base/homeItemsDB';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home-items',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home-items.component.html',
  styleUrl: './home-items.component.css'
})
export class HomeItemsComponent {

  products = HOMEITEMS;
}
