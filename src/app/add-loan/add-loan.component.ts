import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  customerData: any =FormGroup;


  constructor(private fb :FormBuilder, private userService : UserService,private router: Router) { }

  ngOnInit(): void {
    this.customerData=this.fb.group({
      // loanId:['',Validators.required],
      userFirstName:['',Validators.required],
      userLastName:['',Validators.required],
      payment:['',Validators.required],
      interestRate:['',Validators.required],
      propertyAddress:['',Validators.required],
    });
  }


 OnSubmit(){
   console.log(this.customerData);
   this.userService.newLoan(this.customerData.value).subscribe(
     (res)=>{
       console.log(res)
       alert("New Loan created")
      //  this.router.navigate(['/baseadmin']);
      location.reload();
      
     },error=>{
       alert("An error ocurred")
     }
     
   )

}

}
