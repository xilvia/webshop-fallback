import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = 'http://localhost:3210/orders';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);


    /* return new Observable( observer => {
      observer.next(this.orders);
    }); */
  }

  getSelectedOrder(id: number): Observable<any> {
    console.log(id);
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  create(order): Observable<any> {
    return this.http.post(this.apiUrl, order)
  }

  update(order): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.id}`, order)
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  updateOrder(order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.id}`, order, { responseType: 'text' })
  }
  addUser(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }
}
