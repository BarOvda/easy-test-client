import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';

import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private cookieServise: CookieService,
    ) {}
        
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('scope is ' );
        
        const token = this.cookieServise.get("token");
        // this.cookieServise.delete("token");
        if (token) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        //, { queryParams: { returnUrl: state.url }}
        return false;
    }
}
