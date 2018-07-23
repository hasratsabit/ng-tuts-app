import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHashpassword]'
})
export class HashpasswordDirective {

  constructor(private elem: ElementRef) { }


  @HostListener('click') onClick() {
    this.chageStyle();
  }

  chageStyle() {
    let inputType = this.elem.nativeElement.nextSibling.type;

    if(inputType === 'password') {
      this.elem.nativeElement.setAttribute('type', 'text');
    }else {
      this.elem.nativeElement.setAttribute('type', 'password');
    }
    
  }
}
