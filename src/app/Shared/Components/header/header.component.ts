import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserActivityService } from 'src/app/Services/user-activity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inMyCart: any[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private productSvc: ProductService,
    private router: Router,
    private userSvc: UserActivityService) {
    this.isLoggedIn = this.userSvc.IsUserLoggedIn();
  }

  ngOnInit(): void {
    this.inMyCart = this.productSvc.inMyCart;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
