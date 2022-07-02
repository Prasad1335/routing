import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'app-home',component: HomeComponent},
  {path:'app-about',component: AboutComponent},
  {path:'app-contact',component: ContactComponent},
  {path:'products',component: ProductsComponent, children:[{ path:':id', component: ProductComponent}]},
  {path:'products',component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
