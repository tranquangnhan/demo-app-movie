import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {UtilityService} from '../services/utility.service';
import {User} from '../services/user.module';
import { BackendService } from '../services/backend.service';
import { RouterExtensions } from '@nativescript/angular';
import { SweetAlert } from 'nativescript-sweet-alert';
import { ShowSuccess , ShowError } from 'nativescript-sweet-alert/classes';
import { Page } from '@nativescript/core';


const Toast = android.widget.Toast;

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  user: User;
  isAuthenticating = false;
  
  emailError = "";  
  passError = "";
  loginError = "";


  constructor (
    public utilityService:UtilityService,
    private backendService: BackendService,
    private routerExtensions: RouterExtensions,
    private _page: Page
    ) {
      this.user = new User;
      this.user.email = "";
      this.user.password = ""  
   }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
  }

  login() {
    const options: ShowError = {
      text: "Lỗi",
      contentText: "Tài khoản hoặc mật khẩu không đúng.",
      confirmButtonText: "OK",
  }
  SweetAlert.showError(options).then(value => {
      
  });
    this.hasEmailError(this.user.email);
    // this.isAuthenticating = true;
  
    if(this.backendService.login(this.user)){
      // this.isAuthenticating = false;
      this.routerExtensions.navigateByUrl('/home');
    }else{
      alert('Sai tài khoản hoặc mật khẩu!')
    }
  }
  public hasEmailError(email:string){
  
    if(this.utilityService.isValidEmail(email)&&this.user.hasEmail()){
     return true;
    }else{
      email
      return false;
    }
  }
   

}
