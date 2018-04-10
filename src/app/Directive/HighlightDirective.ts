import {Directive,ElementRef,HostListener} from "@angular/core";
@Directive({
    selector:"[abc]"
})
export class HighlighterDirective
{
    //DI
    constructor(private el:ElementRef)
    {

    }

@HostListener('mouseleave') onmouseleave()
{
this.Highlighter(null);
}
@HostListener('mouseenter') onmouseenter()
{
this.Highlighter("yellow");    
}


Highlighter(color:string)
{
    this.el.nativeElement.style.backgroundColor=color;
}

}