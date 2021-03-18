import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';

import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private cookieServise: CookieService,
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const token = this.cookieServise.get("token");
        // this.cookieServise.delete("token");
        if (token) {
            console.log('scope is ');

            return true;

        }
        console.log(route.url[route.url.length - 1].path);

        console.log('NAVTO');


        if (route.url[route.url.length - 1].path === 'home')
            this.router.navigate(['/land-page']);
        else {
            this.router.navigate(['/log-in']);
        }
        return false;
    }
}
