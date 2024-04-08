import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts : any = []

  // Search Key

  public filterCategory : any

  searchKey : string = ""

  constructor(private api : ApiService, private cartService : CartService){ }

  ngOnInit(): void {

    this.getallProductApi()

    this.cartService.search.subscribe((val : any) => {
      this.searchKey = val
    })
    
  }

  

  getallProductApi = () => {
    this.api.getallProducts().subscribe({
      next : (res : any) => {
        console.log(res);

        this.allProducts = res

        this.filterCategory = res

        this.allProducts.forEach((a : any) => {
          if(a.category === "women's clothing" || a.category === "men's clothing"){
            a.category = "fashion"
          }
          Object.assign(a, {quantity : 1, total : a.price})
        });
        // console.log(this.allProducts);
        
      },

      error : (err : any) => {
        console.log(err);
        
      }

    })
  }

  // Add to Cart

  addtocart = (product : any) => {
    this.cartService.addtoCart(product)
  }

  filter(category : string){
    this.filterCategory = this.allProducts
    .filter((a : any) => {
      if(a.category == category || category == ''){
        return a
      }
    })
  }


}
