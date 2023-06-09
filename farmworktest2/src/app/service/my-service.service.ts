import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/products';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  getProduct(id:any):Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products/'+id)
  }
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/products/',product)
  }
  deleteProduct(id: number |string):Observable<IProduct>{
    return this.http.delete<IProduct>('http://localhost:3000/products/'+id)
  }
  updateProduct(product : IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
}
