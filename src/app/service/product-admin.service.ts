import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService {
  apiUrl: string = 'http://localhost:3210/products';
  constructor( private http:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  getSelectedProduct(id:number):Observable<any> {
    console.log(id);
    return this.http.get(`${this.apiUrl}/${id}`)
}
remove(id:number):Observable<Product>{

  return this.http.delete<Product>(`${this.apiUrl}/${id}`)
}
updateProduct(product:any): Observable<any>{
  return this.http.put(`${this.apiUrl}/${product.id}`, product, {responseType: 'text'})
}
addUser(product:Product):Observable<Product>{
  return this.http.post<Product>(this.apiUrl, product);
} 
}