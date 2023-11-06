import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { BackendProductService } from 'src/app/services/backend-product.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all-product',
  templateUrl: './display-all-product.component.html',
  styleUrls: ['./display-all-product.component.css']
})
export class DisplayAllProductComponent implements OnInit {

  products:Product[] = [];
  message : string = ""
  errorMessage : string = ""
  updatedProduct : Product = new Product(0,"",0,"")
  isUpdate : Boolean =  false;
  isLoaded : Boolean = false;
  // constructor(private productService:ProductService) { }
  constructor(private backendProductService:BackendProductService ,  private router: Router) { }
  

  ngOnInit(): void {
this.loadProductsToComponent()
    
  }


  loadProductsToComponent(){
    this.isLoaded = false;
    this.backendProductService.getAllProducts().subscribe(
      {
          next: (data)=>{
            this.isLoaded = true;
          this.products = data
        },
          error : (err)=>{
          console.log(err)
        },
        complete: ()=>{
          console.log("loadeed the data")
        }
      }
    );
  }




  deleteProductById(deleteId :number) {
  //  this.products =  this.productService.deleteProductById(deleteId)
if(confirm("Do you wan to delete the product")){

}

  this.backendProductService.deleteProductById(deleteId).subscribe({
    next : (data)=>{
      console.log(data)
      this.loadProductsToComponent();
      this.message = "Product deleted successfully"
      this.errorMessage = ""
    },
    error : (err)=>{
      console.log(err)
      this.errorMessage = "Product failed to delete"
      this.message = ""
    }
  })
  }

  updateProduct(updateProduct : Product){
    this.isUpdate = true;
    // this.updatedProduct = updateProduct;

  }

  updateProductSubmit(){
    console.log(this.updatedProduct)
    // this.products = this.productService.updateProduct(this.updatedProduct)
    this.isUpdate= false
  }

  goToDetailProduct(productId : number){
    console.log(productId)
    // this.router.navigateByUrl("/productDetails/" + productId)
    this.router.navigate(["/productDetails/" , productId])

  }


}
