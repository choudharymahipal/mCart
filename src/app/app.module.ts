import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { ProductDescriptionComponent } from './Components/product-description/product-description.component';
import { FilterComponent } from './Shared/Components/filter/filter.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { ProductComponent } from './Shared/Components/product/product.component';
import { ProductRatingComponent } from './Shared/Components/product-rating/product-rating.component';
import { ProductService } from './Services/product.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    MyCartComponent,
    ProductDescriptionComponent,
    FilterComponent,
    HeaderComponent,
    ProductComponent,
    ProductRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
