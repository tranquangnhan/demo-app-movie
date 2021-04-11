import { Injectable } from "@angular/core";


const regex:any = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Injectable()

export class UtilityService {
    public isValidEmail(email: String) {
        if(!email)
            return false;

        return regex.test(email);
    }
}