import { Injectable } from '@angular/core';
import {User} from "../login/user";

@Injectable()
export class AccountService {
  loggedIn = false;

  constructor() { }

  login(user:User):boolean{
    if(user.userName=="tulay"&&user.password=="12345"){
      this.loggedIn = true;
      localStorage.setItem("islogged",user.userName);
      return true;
  }
    return false;
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("islogged");
    this.loggedIn=false;
  }
}
