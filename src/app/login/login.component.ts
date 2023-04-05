import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username:'',
    password:''
  }

  constructor(private userService:UserService, private userauthService:UserAuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm : NgForm){
    // console.log("Form is submitted");
     console.log (loginForm.value);

    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        console.log(response.jwtToken);
        console.log(response.user.role);

        this.userauthService.setRoles(response.user.role);
        this.userauthService.setToken(response.jwtToken);

        const role=response.user.role[0].roleName;

        if(role ==='Admin'){
          this.router.navigate(['/baseadmin']);
        }else{
          this.router.navigate(['/home']);
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
