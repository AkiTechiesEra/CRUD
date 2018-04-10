import { Component } from "@angular/core";
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from "@angular/router";
@Component({
    selector: "logout-ui",
    template: `
    <div id="setLogout">
    <input type='button' class="btn btn-primary" value="Logout" (click)="Logout()"/>
    </div>
    `
})
export class LogoutComponent {
    constructor(private localStorage: LocalStorageService,
        private route: Router) { }
    Logout() {
        this.localStorage.clearAll();
        this.route.navigate(["/Login"]);
    }
}