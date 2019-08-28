import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from 'src/app/service/product-admin.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  title: string = "Product Database";
  filterPhrase: string
  removedId: number[] = [];
  counter: number = 0;
  key: string = "id";
  orderDirection: number = 1;
  list$: Observable<Product[]> = this.productAdService.getAll();
  constructor(private productAdService: ProductAdminService) {

  }
  onOrder(key: string) {
    if (key === this.key) {
      this.orderDirection = this.orderDirection === 1 ? -1 : 1;
    } else {
      this.orderDirection = -1;
    }
    this.key = key;
  }

  removeProduct(id) {
    this.productAdService.remove(id).forEach((data) => {
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

