import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  p: Product = new Product(0, "DefaultProduct", 0);
  // p!:Product;
  id!: number;
  price!: number;
  description!: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (parameters) => {
        console.log("now restarting id" + parameters['idenifier']);
        console.log("now restarting description" + parameters['name']);
        this.p = this.productService.findProduct(parameters['idenifier']) || new Product(0, "DefaultProduct", 0)
      })
  }


}
