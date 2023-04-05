import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userauthService : UserAuthService, private router:Router, public userService:UserService) { }

public rolec :any =""

public isAdmin : boolean =false
public isUser : boolean = false
  ngOnInit(): void {
  //   this.rolec= localStorage.getItem('roles');
  //  //console.log(this.rolec)
  //  console.log(this.rolec)
  //  if(this.rolec==='Admin'){
  //     this.isAdmin=true
  //     //return this.isAdmin
      
  //  }else{
  //    this.isUser=true
  //    //return this.isUser
  //  }
  }
  //conditions for showing and not showing login and logout buttons
  public isLoggedIn(){
    return this.userauthService.isLoggedIn();
  }

  public logout(){
    //console.log("inside logout");
    this.userauthService.clear();
    this.isAdmin=false
    this.isUser=false
    this.router.navigate(['/login']);

   
    
  }

  
}
