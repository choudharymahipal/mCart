import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserActivityService } from 'src/app/Services/user-activity.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() items!: any;

  constructor(
    private productSvc: ProductService,
    private router: Router,
    private userSvc: UserActivityService) {

  }

  ngOnInit(): void {
  }

  addToCart(id: any) {
    let existCount = this.productSvc.inMyCart.filter(x => x == id).length;
    if (existCount > 0) {
      //exist
    } else {
      //new
      this.productSvc.inMyCart.push(id);
    }
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
