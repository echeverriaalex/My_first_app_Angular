import { Component } from '@angular/core';
import { Product } from './Models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  productList = new Array<Product>();
  product = new Product();

  showSelectedProduct(product: Product){
    this.product = product;
  }
}
