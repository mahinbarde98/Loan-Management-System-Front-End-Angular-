import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Loan } from './loan';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customerId: string | undefined;
  public loan !: Loan []; 
  loan1:any;
  userData:any;
  searchText:any;
  customerData: any =FormGroup;

  datauser:any;
  
 

  constructor(public userService: UserService,private fb :FormBuilder,private userauthService : UserAuthService) { 
    this.getLoan();
   
  }



  ngOnInit(): void {
    this.customerData=this.fb.group({
       loanId:['',Validators.required],
      userFirstName:['',Validators.required],
      userLastName:['',Validators.required],
      payment:['',Validators.required],
      interestRate:['',Validators.required],
      propertyAddress:['',Validators.required],
    });
    
  }
 
 
  //getting loan to set on search screen
  getLoan(){
    this.userService.getLoan().subscribe(
      (resp)=>{
        console.log(resp);
        this.loan1=resp;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  //delete loan
  delete(item:any){
    this.userService.deleteLoan(item.loanId).subscribe(
      (resp)=>{
        console.log(resp);
        
        this.getLoan();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  //edit loan
  edit(item:any){
    this.userService.getLoanbyId(item.loanId).subscribe(
      (resp)=>{
        console.log("in edit",resp);
        this.userData=resp;
       
        console.log("customer data",this.customerData);
        this.customerData.get('loanId').setValue(this.userData.loanId);
        this.customerData.get('userFirstName').setValue(this.userData.userFirstName);
        this.customerData.get('userLastName').setValue(this.userData.userLastName);
        this.customerData.get('payment').setValue(this.userData.payment);
        this.customerData.get('interestRate').setValue(this.userData.interestRate);
        this.customerData.get('propertyAddress').setValue(this.userData.propertyAddress);
        // console.log("After :",this.userData);
        // console.log("customerData",this.customerData)
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  updateLoan(){
    
    this.userService.updateLoan(this.customerData.value).subscribe(
     
      (resp)=>{
        
        console.log(resp);
        this.getLoan();
        
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  public isLoggedIn(){
    return this.userauthService.isLoggedIn();
  }

 

}
