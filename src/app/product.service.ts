import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get('http://172.17.0.1:9898/product');
  }
  Insert(productObj)
  {
    return this.http.post('http://172.17.0.1:9898/product', productObj);
  }
}
