import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { BackendProductService } from 'src/app/services/backend-product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']

})
export class ProductDetailsComponent implements OnInit {

  Productid :number = 0;
  product?: Product

  constructor(private route : ActivatedRoute, private backendProductService:BackendProductService) { }

  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));
    
    this.route.params.subscribe(
      {
        next:(params)=>{
          this.Productid = +params["productId"]
          console.log("got id" + this.Productid)
          this.backendProductService.getProductById(this.Productid).subscribe(
            {
              next:(data)=>{
                console.log(data);
                this.product =data
              },
              error:(err)=>{console.log(err) }
            }
          )
        }
      }
    )
    



  }

}
