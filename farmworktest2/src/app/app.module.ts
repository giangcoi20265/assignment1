import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './component/productslist/productlist/productlist.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductAddComponent } from './component/ProductAdd/product-add/product-add.component';
import { HomeAdminComponent } from './pages/HomeAdmin/home-admin/home-admin.component';
import { NotfoundComponent } from './component/not-found/notfound/notfound.component';
import { ProductEditComponent } from './component/product-edit/product-edit/product-edit.component';
import { ProducthahaComponent } from './component/producthaha/producthaha/producthaha.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductItemComponent,
    ProductAddComponent,
    HomeAdminComponent,
    NotfoundComponent,
    ProductEditComponent,
    ProducthahaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
