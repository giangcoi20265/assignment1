import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
// product!:IProduct
// productForm = this.formBuilder.group({
//   name:[''],
//   price:0
// })
// constructor(private myService :MyServiceService,
//   private formBuilder:FormBuilder,
//   private router:ActivatedRoute
//   ){
//     this.router.paramMap.subscribe(params=>{
//       const id= params.get('id');
//       this.myService.getProduct(id).subscribe(product=>{
//         console.log(product)
//         this.product=product;
//         this.productForm.patchValue({
//           name : product.name
        
//         })
//       })
//     })
// }
//   onHanldUpdate(){
//     if(this.productForm.valid){
//       id: this.product.id,
//       name: this.productForm.value.name ||""
//     }
//   }
}
