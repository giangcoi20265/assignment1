import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { MyServiceService } from 'src/app/service/my-service.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
products : IProduct[]=[];
product! :IProduct;
constructor(private myService :MyServiceService){
  this.myService.getProducts().subscribe(data=>{
    this.products = data;
  })
}
itemRemove(id:any){
  this.myService.deleteProduct(id).subscribe(()=>{
    this.products=this.products.filter(item=>item.id! = id)
  },(error)=>{
    console.log(error)
  })
}
}
