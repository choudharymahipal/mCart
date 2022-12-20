import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productData: any = [];

  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
    this.productData = this.productSvc.ProductData;
  }

}
