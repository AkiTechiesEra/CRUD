import {Pipe,PipeTransform} from "@angular/core";
import {CommentsModel} from "../Model/Comment.Model";
@Pipe({
    name:"searchPipe"
})
export class SearchPipe implements PipeTransform
{
    transform(list:CommentsModel[],text:string)
    {
        if(text)
        {
return list.filter(function(row){
    return (row.email.toUpperCase().includes(text.toUpperCase()));

})
        }else
        {
return list;
        }


    }

}