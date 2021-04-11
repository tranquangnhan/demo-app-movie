import { Injectable } from "@angular/core";

import { BackendService } from "./services/backend.service";
import {  RouterExtensions } from "@nativescript/angular";

@Injectable()

export class AuthGuardimplementsCanActivate {
    constructor(private backendService: BackendService, private routerExtensions: RouterExtensions) { }

    canActivate() {
        if (this.backendService.isUserLoggedIn()) {
            return true;
        } else {
            this.routerExtensions.navigate(["/login"]);
            return false;
        }
    }

}
