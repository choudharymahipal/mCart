import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserActivityService } from 'src/app/Services/user-activity.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  inMyCart: any[] = [];
  productData: any[] = [];

  constructor(
    private productSvc: ProductService,
    private router: Router,
    private userSvc: UserActivityService
  ) { 

  }

  ngOnInit(): void {
    this.inMyCart = this.productSvc.inMyCart;
    for (let index = 0; index < this.inMyCart.length; index++) {
      this.productData.push(this.productSvc.ProductData.filter(x=>x.ProductID == this.inMyCart[index]));      
    }
    //this.productData = this.productSvc.ProductData.filter(x=>x.ProductID == this.inMyCart);
  }

  buyNow() {
    if (this.userSvc.IsUserLoggedIn()) {
      //user is loggedin
      this.router.navigateByUrl("/checkout");
    } else {
      //user is not loggedin
      this.router.navigateByUrl("/login");
    }
  }

}
