import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendProductService {

  constructor(private httpClient : HttpClient) { }
  
    postProduct(newProduct : Product) : Observable<any> {
      return this.httpClient.post("http://localhost:8090/product", newProduct )
    }

    getAllProducts() : Observable<any> {
      return this.httpClient.get("http://localhost:8090/allProducts", { responseType:"json"} )
    }

    deleteProductById(id: number) : Observable<any> {
      return this.httpClient.delete("http://localhost:8090/product/"+id, {responseType : "json"} )
    }
      
    getProductById(id: number) : Observable<any>{
      return this.httpClient.get("http://localhost:8090/getproduct/"+id ,{responseType:"json"})
    }
    

  }

