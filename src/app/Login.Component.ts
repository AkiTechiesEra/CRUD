import { Component } from "@angular/core";
import { LoginModel } from "./Model/LoginModel";
import { Router } from "@angular/router";
import { AuthService } from "./SharedService/AuthService.Service";
import { LocalStorageService } from 'angular-2-local-storage';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
@Component({
    selector: "log-ui",
    templateUrl: "./View/Login.html"

})
export class LoginComponent {
    public LoginForm: FormGroup;
    public error: boolean = false;
    constructor(private route: Router,
        private FormBuilder: FormBuilder,
        private AuthService: AuthService,
        private localStorage: LocalStorageService) {
        this.LoginForm = this.FormBuilder.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required]]
        })
        this.localStorage.set("isLoggedIn", false);

    }

    Login(data: LoginModel) {
        if (data.username == "akshayk" && data.password == "admin123") {
            this.AuthService.loggedIn = true;
            this.localStorage.set("isLoggedIn", true);
            this.route.navigateByUrl("/Dashboard");
        }
        else {
            this.AuthService.loggedIn = false;
            this.error = true;
            this.localStorage.set("isLoggedIn", false);
        }

    }

}