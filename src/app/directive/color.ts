import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]' ,
  host : {
    '(mouseover)' : 'onMouseOver()' ,
    '(mouseout)' : 'onMouseOut()' ,
  }
})
export class Color {

  constructor(private ele : ElementRef) { 

   }

   onMouseOver(){
    this.ele.nativeElement.style.color = `salmon` ;
   } ;
   onMouseOut(){
    this.ele.nativeElement.style.color = `red`
   }
}
