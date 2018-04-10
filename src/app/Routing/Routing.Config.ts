import { Routes,CanActivate } from "@angular/router";
import {RouteGuradService} from "./RouteGuradService.Service";
import { WebServiceComponent } from "../WebService.Component";
import {LoginComponent} from "../Login.Component";
import { AddCommentComponent } from "../Forms/AddComments";
import {NotFoundComponent} from "../404/NotFoundComponent.Component"
export const RoutingConfig: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {

        path: "Dashboard",
        component: WebServiceComponent,
        canActivate:[RouteGuradService]
    },
     {

        path: "Login",
        component: LoginComponent
        
    },
    {
        path: "AddComment",
        component: AddCommentComponent,
        canActivate:[RouteGuradService]
    },
    {
        path: "AddComment/:id",
        component: AddCommentComponent,
        canActivate:[RouteGuradService]
    },
    {
        path:"**",
        component:NotFoundComponent
    }
]