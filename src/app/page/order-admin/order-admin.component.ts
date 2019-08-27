import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {
  title: string = "Order DataBase";
  filterPhrase: string
  removedId: number[] = [];
  counter: number = 0;
  list$: Observable<Order[]> = this.orderService.getAll();
  constructor(private orderService: OrderService) {

  }
  removeOrder(id) {
    this.orderService.remove(id).forEach((data) => {
      console.log(data);
      this.removedId.push(id);
      console.log(this.removedId);
      this.counter++;
    })


  }
  ngOnInit() {
    this.filterPhrase = "";
  }
}
