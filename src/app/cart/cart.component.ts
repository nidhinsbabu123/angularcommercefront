import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productcart : any = []

  public grandTotal !: number

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.productcart = res
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(item : any){
    this.cartService.removeCartItem(item)
  }

  emptycart(){
    this.cartService.removeAllCart()
  }

}
