import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Order } from 'src/app/model/order';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  order: Order = {
    idProduct: 0,
    insdate: null,
    product: 0,
    userName: '',
    userEmail: '',
    shippingAddress: '',
    quantity: 0
  };
  product: Product;
  counter: number = 0;
  cart: any[];


  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = + (this.ar.snapshot.params['id'])
    this.productService.getOne(id).subscribe(product => { this.product = product });
  }

  addToCart(id: number): void {
    const idForCart = this.ar.snapshot.params['id'];
    id = idForCart;

    this.cart = [{
      id: this.product.id,
      name: this.product.name,
      type: this.product.type,
      picture: this.product.picture,
      description: this.product.description,
      color: this.product.color,

    }];

    this.order.idProduct = this.product.id;
    console.log(this.cart);

    this.counter += 1;

  }

  removeItem(id: number): void {
    const index = this.cart.findIndex(item => item.id === id);
    this.cart.splice(index, 1);
    console.log(this.cart.length)

    this.counter = 0; // -1 kéne legyen

  }
  onSubmit(ev: Event): void {
    ev.preventDefault();
    //this.order.id = Date.now();
    this.order.product = this.product.id;
    this.order.insdate = new Date();

    console.log(this.order);

    this.orderService.create(this.order).subscribe(
      order => {
        console.log(order);
        this.router.navigateByUrl("/products")
      }, err => console.error(err)

    )

  }

}
