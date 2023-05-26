import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './component/productslist/productlist/productlist.component';

import { ProductAddComponent } from './component/ProductAdd/product-add/product-add.component';
// import { NotfoundComponent } from './component/not-found/notfound/notfound.component';
import { ProductEditComponent } from './component/product-edit/product-edit/product-edit.component';

const routes: Routes = [
  {path:'products', component:ProductlistComponent},
  {path:'productsAdd',component:ProductAddComponent},
  {path:'productsEdit',component:ProductEditComponent},
  // {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
