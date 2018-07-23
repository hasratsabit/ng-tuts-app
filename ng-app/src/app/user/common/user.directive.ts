import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter () {
    this.actOnElem('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.actOnElem(null);
  }


  private actOnElem(color: string) {
    console.log(this.elem);
  }

}
