import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  @Input()
  productList: Array<Product> = [];

  @Output()
  selectedProductEvent = new EventEmitter<Product>();

  constructor(){}

  ngOnInit(): void {
    
  }

  selectProduct(product: Product){
    this.selectedProductEvent.emit(product);
  }

}
