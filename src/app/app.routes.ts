import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeItemsComponent } from './home-items/home-items.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'clothes',
    component: ClothesComponent,
    title: "Clothes"
  },
  {
    path: 'home-items',
    component: HomeItemsComponent,
    title: "Home Items"
  },
  {
    path: 'fragrances',
    component: FragrancesComponent,
    title: "Fragrances"
  },
  {
    path: 'contact-form',
    component: ContactFormComponent,
    title: "Contact Form"
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: "About Us"
  }
];
