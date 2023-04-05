import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  url = "http://localhost:8080";



  requestHeader = new HttpHeaders(
    { "No-auth": "True" }
  )

  //Authentication and Login
  public login(loginData: any) {
    return this.httpClient.post(this.url + "/authenticate", loginData, { headers: this.requestHeader });
  }

  public search(userFirstName: any) {
    return this.httpClient.get(this.url + "/loans/" + `${userFirstName}`);
  }

  //for creating new loan
  public newLoan(userData: any) {
    return this.httpClient.post(this.url + "/newLoan", userData);

  }

  //getting all the loan details from the database
  public getLoan() {
    return this.httpClient.get(this.url + "/getLoan");

  }

  //to get loan suing Id from the database
  public getLoanbyId(id: any) {
    return this.httpClient.get(this.url + "/loan/" + id);

  }


  //Deleting the existing loan
  public deleteLoan(id: any) {
    return this.httpClient.delete(this.url + "/delete?id=" + id);
  }

  //Editing the existing loan
  public updateLoan(loan: any) {
    console.log(loan);
    return this.httpClient.put(this.url + "/updateLoan", loan);
  }

  //To verify assigned role and the logged in user roles matches or not
  public roleMatch(allowedRoles: any): boolean {

    let activeRole = allowedRoles
    let userRoles = this.userAuthService.getRoles();
    if (userRoles === activeRole) {
      console.log(allowedRoles);
      return true
    }

    return false;

  }

}

