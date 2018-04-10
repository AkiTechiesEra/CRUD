import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/toPromise";
@Injectable()
export class HttpService {
    constructor(private http: Http) {

    }


    GetComments() {
        return this.http.get("https://jsonplaceholder.typicode.com/comments").
            delay(1000).
            map((res: any) => res.json());
    }


}