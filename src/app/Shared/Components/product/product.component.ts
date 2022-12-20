import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() items!: any;

  constructor(private productSvc: ProductService) { }

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

}
