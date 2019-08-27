import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { BadurlComponent } from './page/badurl/badurl.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { EditProductAdminComponent } from './page/edit-product-admin/edit-product-admin.component';
import { EditOrderAdminComponent } from './page/edit-order-admin/edit-order-admin.component';
import { AddOrderAdminComponent } from './page/add-order-admin/add-order-admin.component';
import { AddProductAdminComponent } from './page/add-product-admin/add-product-admin.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'order-admin', component: OrderAdminComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'admin/products', component: ProductAdminComponent },
  { path: 'admin/products/:id', component: EditProductAdminComponent },
  { path: 'admin/orders', component: OrderAdminComponent },
  { path: 'admin/orders/:id', component: EditOrderAdminComponent },
  { path: 'add/order', component: AddOrderAdminComponent },
  { path: 'add/product', component: AddProductAdminComponent },
  { path: '**', component: BadurlComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
