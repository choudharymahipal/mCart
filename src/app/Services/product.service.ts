import { Injectable } from '@angular/core';
import * as ProData from "../Shared/Database/Products.json";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductData: any[] = (ProData as any).default;
  inMyCart: any[] = [];
  
  constructor() { }
}
