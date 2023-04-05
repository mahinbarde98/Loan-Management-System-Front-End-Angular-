import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  //This service is basically for storing and retriving data from local storage

  public setRoles(roles:any){
    localStorage.setItem('roles', (roles[0].roleName));
  }

  public getRoles():any {
    return (localStorage.getItem('roles'));
  }

  public setToken(jwtToken:any){
    localStorage.setItem('jwtToken',jwtToken);
  }
  public getToken(): any {
    return localStorage.getItem('jwtToken')  ;
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
}

