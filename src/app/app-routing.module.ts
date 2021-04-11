import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginComponent } from "./login/login.component";

import { AuthGuardimplementsCanActivate } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"home",component:HomeComponent,canActivate: [AuthGuardimplementsCanActivate]},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
