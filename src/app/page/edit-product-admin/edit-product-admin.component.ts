import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from 'src/app/service/product-admin.service';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-admin',
  templateUrl: './edit-product-admin.component.html',
  styleUrls: ['./edit-product-admin.component.css']
})
export class EditProductAdminComponent implements OnInit {
  productId: number = 0;
  product:Product = new Product();

  constructor(private productAdminser: ProductAdminService, private ar: ActivatedRoute, private router: Router) {
    this.ar.params.forEach(param => {
      this.productId = param.id
    })

  }

  ngOnInit() {
    this.productAdminser.getSelectedProduct(this.productId).forEach(product=> this.product=product)
  }
  onUpdate(event:Event){
    event.preventDefault();
    this.productAdminser.updateProduct(this.product).forEach(product =>{
      console.log(product);
      this.router.navigateByUrl('/admin/products').then(reseolve => console.log("sikeres oldalváltás") )}
      )

  }
}
