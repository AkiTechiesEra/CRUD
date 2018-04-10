import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../SharedService/AuthService.Service';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class RouteGuradService implements CanActivate {

    constructor(private authService: AuthService,
                private Router: Router,
                private LocalStorageService:LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, snap: RouterStateSnapshot) {
        let isLoggedIn:Boolean=this.LocalStorageService.get("isLoggedIn") as Boolean;
        if (!isLoggedIn) {
            this.Router.navigate(["/Login"]);
            return false;
        }
        return true;
    }
}