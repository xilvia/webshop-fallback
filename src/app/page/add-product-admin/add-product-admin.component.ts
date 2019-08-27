import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from 'src/app/service/product-admin.service';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css']
})
export class AddProductAdminComponent implements OnInit {

  product: Product = new Product();
  constructor(private adminProductSer: ProductAdminService, private router: Router) { }

  ngOnInit() {
  }
  onAdd(event: Event) {
    event.preventDefault();
    this.adminProductSer.addUser(this.product).forEach(
      product => {
        console.log(product);
        this.router.navigateByUrl('/admin/products').then(reseolve => console.log("sikeres oldalváltás"))
      }
    )
  }
}
