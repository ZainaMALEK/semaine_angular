import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
//import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

productList:any;
cart: any[];

  constructor(private productService: ProductsService) {

      this.productList = this.productService.productList;
      this.cart = this.productService.cart;


  }

  addToCart(item){
    this.productService.addToCart(item);
  }

  ngOnInit() {
  }

}
