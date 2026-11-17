import { Routes } from '@angular/router';
import { Index } from './index/index';
import { Products } from './products/products';

export const routes: Routes = [
  { path: '', component: Index },         
  { path: 'products', component: Products } 
];