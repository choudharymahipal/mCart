import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inMyCart: any[] = [];

  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
    this.inMyCart=this.productSvc.inMyCart;
  }

}
