import { Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(): void {
      // (this.element.nativeElement as HTMLElement).style.background = '#2ecc71';
      this.renderer.setStyle(this.element.nativeElement, 'background', '#2ecc71');
  }

  @HostListener('mouseenter') onMouseEnter(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '1.5em');
  } 

  @HostListener('mouseleave') onMouseLeave(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '1em');
  } 

}
