import {Component} from "@angular/core";
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
    selector:"notfound-ui",
    template:"<h3> 404: The resource you are looking for not detected</h3>"
})
export class NotFoundComponent
{
    constructor(private LocalStorage:LocalStorageService)
    {
        this.LocalStorage.remove("List");
    }

}