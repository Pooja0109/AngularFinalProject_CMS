import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBMIboxes]'
})
export class BMIboxesDirective {

  constructor(private el:ElementRef) {
      el.nativeElement.style.width="25px";
      el.nativeElement.style.height="25px";
      el.nativeElement.style.border="1px solid #88888800;"
      el.nativeElement.style.marginLeft="3%";
    }
   }
