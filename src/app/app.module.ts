import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { SliderComponent } from './page/slider/slider.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BadurlComponent } from './page/badurl/badurl.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { EditProductAdminComponent } from './page/edit-product-admin/edit-product-admin.component';
import { AddProductAdminComponent } from './page/add-product-admin/add-product-admin.component';
import { EditOrderAdminComponent } from './page/edit-order-admin/edit-order-admin.component';
import { AddOrderAdminComponent } from './page/add-order-admin/add-order-admin.component';
import { AdminFilterPipe } from './pipe/admin-filter.pipe';
import { DeleteFilterPipe } from './pipe/delete-filter.pipe';
import { AdminSorterPipe } from './pipe/admin-sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SliderComponent,
    NavComponent,
    BadurlComponent,
    OrderAdminComponent,
    ProductAdminComponent,
    EditProductAdminComponent,
    AddProductAdminComponent,
    AdminFilterPipe,
    DeleteFilterPipe,
    AdminSorterPipe,
    AddOrderAdminComponent,
    EditOrderAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
