import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule, NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {BackendService} from './services/backend.service';
import {UtilityService} from './services/utility.service';
import {AuthGuardimplementsCanActivate} from './auth-guard.service';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        SignupComponent,

    ],
    providers: [
        BackendService,
        UtilityService,
        AuthGuardimplementsCanActivate
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
