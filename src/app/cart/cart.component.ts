import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];

  public grandTotal !: number;

  constructor(private cartService : CartService,private router: Router) { }



  ngOnInit(): void {

    this.cartService.getProducts()



    .subscribe(res=>{



      this.products = res;



      this.grandTotal = this.cartService.getTotalPrice();



    })



  }



  removeItem(item: any){

    if(confirm("Are you sure to delete?"))



    this.cartService.removeCartItem(item);

    alert("item delected successfully")

  }



  emptycart(){



    this.cartService.removeAllCart();



  }
  checkout() {

    localStorage.setItem('grand_total', JSON.stringify(this.grandTotal));

    this.router.navigate(['/payment']);

  }





}
