import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRAGRANCES } from '../data-base/fragrancesDB';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-fragrances',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './fragrances.component.html',
  styleUrl: './fragrances.component.css'
})
export class FragrancesComponent {

  fragrances = FRAGRANCES;

}
