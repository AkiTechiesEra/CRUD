import { Component, OnInit } from "@angular/core";
import { HttpService } from "./Services/HttpService.Service";
import { CommentsModel } from "./Model/Comment.Model";
import { DataService } from "./SharedService/DataService";
import { Router } from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
    selector: "web-ui",
    templateUrl: "./View/Comments.html",
    styleUrls: ["../Styles/WebService.Style.css"],
    providers: [HttpService]
})

export class WebServiceComponent {
    //LocalList to display on Dashboard
    public localList: CommentsModel[];

    //Loader to wait for result
    public loading: boolean = false;
    public p: number = 1;
    public searchText: string;

    //DI: Dependency injection
    constructor(private service: HttpService,
        private dataService: DataService,
        private router: Router,
        private localstorage: LocalStorageService) { }

    ngOnInit() {
        this.searchText = this.dataService.searchText;
        if (!this.dataService.isChanges) {
            this.loading = true;
            this.service.GetComments().subscribe((res: any) => {
                //Guys its hack to show importance of loader,
                //please ask me if any confusion on my whatsapp :) 9953980816  :)
                this.loading = false;
                this.dataService.list = res
                if (this.dataService.list) {
                    this.localList = this.dataService.list;
                    this.localstorage.set("List", this.dataService.list);

                }
            });
        } else {
            this.localList = this.dataService.list;
            this.p = this.dataService.pageNumber;
            this.localstorage.set("List", this.dataService.list);
        }
    }


    AddCommentsData() {
        this.router.navigateByUrl("/AddComment");
    }

    DeleteComments(data: CommentsModel) {
        this.dataService.list = this.localstorage.get("List") as CommentsModel[];
        let index: number = this.dataService.list.findIndex(x => x.id == data.id);
        console.log(index);

        if (index > -1) {
            this.dataService.list.splice(index, 1);
            this.localList = this.dataService.list;
            this.localstorage.set("List", this.dataService.list);
        }
    }

    EditComments(data: CommentsModel) {
        this.dataService.searchText = this.searchText;
        this.router.navigate(['/AddComment', data.id]);
    }

    GetPage(event: any) {
        this.dataService.pageNumber = event;
        return event;
    }

}