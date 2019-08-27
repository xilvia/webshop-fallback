import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-order-admin',
  templateUrl: './edit-order-admin.component.html',
  styleUrls: ['./edit-order-admin.component.css']
})
export class EditOrderAdminComponent implements OnInit {
  orderId: number = 0;
  order: Order = new Order();

  constructor(private orderAdminser: OrderService, private ar: ActivatedRoute, private router: Router) {
    this.ar.params.forEach(param => {
      this.orderId = param.id
    })

  }

  ngOnInit() {
    this.orderAdminser.getSelectedOrder(this.orderId).forEach(order => this.order = order)
  }
  onUpdate(event: Event) {
    event.preventDefault();
    this.orderAdminser.updateOrder(this.order).forEach(order => {
      console.log(order);
      this.router.navigateByUrl('/admin/orders').then(resolve => console.log("sikeres oldalváltás"))
    }
    )

  }
}