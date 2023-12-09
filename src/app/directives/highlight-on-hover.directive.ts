import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  private highlight(shouldHighlight: boolean) {
    if (shouldHighlight == true) {
      const borderColor = shouldHighlight ? 'red' : null;
      this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${borderColor}`);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
    
  }

}
