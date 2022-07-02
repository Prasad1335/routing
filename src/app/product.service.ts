import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  products: Product[] = [
    new Product(1, 'mango', 1000),
    new Product(2, 'methi', 2000),
    new Product(3, 'onions', 3000)
  ];
 
  public getProduct(): Product[] {
    return this.products;
  }
  public findProduct(id: number): Product | null {
    let p: Product = new Product(0, '', 0);
    this.products.forEach(element => { if (element.id == id) p = element });
    console.log(p?.description);
    console.log("inside findproduct of Product service")
    return p;
  }
  constructor() { }
}
