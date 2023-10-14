import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit{
  @Input()
  productList: Array<Product> = [];
  description: string = "";
  price: number = 0;

  ngOnInit(){
    
  }

  addProduct(){
    let product = new Product();
    product.description = this.description;
    product.price = this.price;

    this.productList.push(product)
  }
}
