import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList:any;
  constructor() {
    
    this.productList = [
      new Product('collier', 'Joli collier','https://cdn.shopify.com/s/files/1/1614/0379/products/ensemble-de-bijoux-licorne_2048x.jpg?v=1516560799'),
      new Product('bracelet', 'Joli bracelet','https://media.histoiredor.com/fr/view0size300/FABFBW00XE3.jpg' ),
      new Product('bague', 'jolie blague','https://www.maty.com/contenu/pagesstatiquesRWD/511/images/bijoux-alliances.jpg' )
    ];
   }
}
