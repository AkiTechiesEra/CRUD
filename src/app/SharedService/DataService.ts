import { Injectable } from "@angular/core";
import { CommentsModel } from "../Model/Comment.Model";

@Injectable()
export class DataService {
  public isChanges: boolean = false;
  public list: CommentsModel[];
  public pageNumber: number;
  public searchText: string = "";
}