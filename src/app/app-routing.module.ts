import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { ProductDescriptionComponent } from './Components/product-description/product-description.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "mycart", component: MyCartComponent },
  { path: "productdescription", component: ProductDescriptionComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
