import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem : number =0;

  constructor(public auth:AuthService,private cartService : CartService ) { }
  
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem =res.length;
    })
    
  }

  logout(){
      //remove token
      this.auth.removeToken();
      this.auth.canAccess();
  }

}
