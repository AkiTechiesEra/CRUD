import {Pipe,PipeTransform} from "@angular/core";
import {CommentsModel} from "../Model/Comment.Model";
@Pipe({
    name:"go"
})
export class GoPipe implements PipeTransform
{

transform(list:CommentsModel[],d1:string)
{
    //falsy 
    if(d1)
    {
    return list.filter(function(row){
        return row.email.toUpperCase().includes(d1.toUpperCase());
    })
}
else
{
    return list;
}

}

}