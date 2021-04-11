import { Injectable } from "@angular/core";
import { getString, setString } from "@nativescript/core/application-settings";


import { User } from "./user.module";

const _CURRENT_USER = "_CURRENT_USER";

@Injectable()
export class BackendService {

  loggedIn:boolean;

  public isUserLoggedIn(): boolean {
    
    return this.loggedIn;
  }

  public login(user: User) {
  
    if(user.email ===user.password){
      this.loggedIn = true;
      return true;
    }else{
      this.loggedIn = false;
      return false;
    }
  }


  private get user(): string {
    return getString(_CURRENT_USER);
  }

  private set user(theToken: string) {
    setString(_CURRENT_USER, theToken);
  }
}