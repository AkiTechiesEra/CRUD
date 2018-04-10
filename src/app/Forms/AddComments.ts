import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { CommentsModel } from "../Model/Comment.Model";
import { DataService } from "../SharedService/DataService";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
    selector: "add-comment",
    templateUrl: "../View/AddComment.html",

})

export class AddCommentComponent {
    //Creating form variable to display.
    public form: FormGroup;
    public formTitle: string;
    public buttonValue:string;

    //Dependency Injections    
    constructor(private builder: FormBuilder,
        private dataService: DataService,
        private route: Router,
        private location: Location,
        private ActivatedRoute: ActivatedRoute,
        private LocalStorage: LocalStorageService) { }

    //Page load to intialize the form
    ngOnInit() {
        //Check whether it sends the query string or not
        if (this.ActivatedRoute.snapshot.params["id"]) {
            this.formTitle = "EDIT";
            this.buttonValue="Update Comment";  
            //Sending id to update the records
            let id: number = this.ActivatedRoute.snapshot.params["id"];
            this.dataService.list = this.LocalStorage.get("List") as CommentsModel[];
            //Get first modelfound to update based on primary key. 
            let model: CommentsModel = this.dataService.list.filter(x => x.id == id)[0];
            //Show the Add comments form in editable form 
            this.SetForm(model);
        }
        else {
            //Sending an empty model
            this.formTitle = "ADD";
            this.buttonValue="Add Comment";  
            let model: CommentsModel;
            //Show Add comments form empty for the fresh addition
            this.SetForm(model);
        }
    }


    //Using same form for updating and Adding the comments.
    SetForm(data: CommentsModel) {
        this.dataService.list = this.LocalStorage.get("List") as CommentsModel[];
        let newId: number = Math.max.apply(Math, this.dataService.list.map(function (model) { return model.id; }))
        //Creating model driven form for Add and update. 
        this.form = this.builder.group({
            id: [data ? data.id : newId + 1, []],
            name: [data ? data.name : "", []],
            email: [data ? data.email : "", []],
            body: [data ? data.body : "", []],
        })
    }

    //Use for updting and adding new comment
    AddComment(data: CommentsModel) {
        this.dataService.list = this.LocalStorage.get("List") as CommentsModel[];
        if (data && !this.dataService.list.filter(x => x.id == data.id)[0]) {
            this.dataService.list.unshift(data);
            this.LocalStorage.set("List", this.dataService.list);
            this.dataService.isChanges = true;
            this.route.navigateByUrl("/Dashboard");
        }
        else {
            this.dataService.list = this.LocalStorage.get("List") as CommentsModel[];
            let index = this.dataService.list.findIndex(x => x.id == data.id);
            //User to remove and add new element on the same location.
            //here 1 means deleting 1 record and replacing it
            this.dataService.list.splice(index, 1, data);
            this.LocalStorage.set("List", this.dataService.list);
            this.dataService.isChanges = true;
            this.route.navigateByUrl("/Dashboard");
        }
    }

    GoBack() {
        this.location.back();
        this.dataService.isChanges = true;
    }
}