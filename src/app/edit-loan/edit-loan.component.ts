import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Loan } from '../admin/loan';



@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
  customerData:any;

  constructor(private userService: UserService) { }
  public loan !: Loan []; 

  ngOnInit(): void {
  }
  search(dataForm:NgForm){
    console.log(dataForm.value)
    this.userService.search(dataForm.value.userName).subscribe((data:any)=>{
      this.loan=data;
      console.log("data",this.loan)
    })

}
}
