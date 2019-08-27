import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll();

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }

}
