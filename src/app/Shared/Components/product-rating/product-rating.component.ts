import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {
  myStars: any = [];
  @Input() myrating: number = 0;

  constructor() { }

  ngOnInit(): void {
    for (let index = 1; index <= 5; index++) {
      if (index <= this.myrating)
        this.myStars.push(true);
      else
        this.myStars.push(false);
    }
  }

}
