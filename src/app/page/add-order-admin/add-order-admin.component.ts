import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-order-admin',
  templateUrl: './add-order-admin.component.html',
  styleUrls: ['./add-order-admin.component.css']
})
export class AddOrderAdminComponent implements OnInit {

  order: Order = new Order();
  constructor(private adminOrderSer: OrderService, private router: Router) { }

  ngOnInit() {
  }
  onAdd(event: Event) {
    event.preventDefault();
    this.adminOrderSer.addUser(this.order).forEach(
      order => {
        console.log(order);
        this.router.navigateByUrl('/admin/orders').then(resolve => console.log("sikeres oldalváltás"))
      }
    )
  }
}
