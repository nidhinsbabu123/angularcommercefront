import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  // Path for home - here home is all product component. 

  {path:"", component: AllProductsComponent},

  // Path for Login Page

  {path : "user/login", component : LoginComponent},

  // Path for register page

  {path : "user/register", component : RegisterComponent},

  // Path for view - view a single product

  {path : "product/view/:id", component : ViewComponent},

  // Path for the cart page

  {path : "product/cart", component : CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
