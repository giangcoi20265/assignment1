import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import{FormBuilder, Validators} from '@angular/forms'
import { IProduct } from 'src/app/interfaces/products';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
constructor(private forBuilder: FormBuilder,
  private myService : MyServiceService
  ){}
  productForm=this.forBuilder.group({
    name:['',[Validators.required]],
    price:[0]
  })
  onHanldeSubmit(){
    if(this.productForm.valid){
      const product:any={
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.myService.addProduct(product).subscribe((data)=>{
        console.log(data)
      })
    }
  }
}
