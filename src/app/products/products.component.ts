import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]|undefined;

   constructor(private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.products=this.productService.getProduct();
  }

}
