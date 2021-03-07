
import { Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white')

    // setTimeout(() => {
    // this.renderer.destroy()
    // },2000)
    
    
    
    // NOT SURE WHAT THIS DOES :( )
    // let dupa = this.renderer.createElement('dupa','namespaceDupa');
    // dupa.
    // this.renderer.appendChild(this.elRef.nativeElement,dupa)

  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.renderer.setStyle(this.elRef.nativeElement,'color','white')
    this.renderer.setStyle(this.elRef.nativeElement,'border','2px solid powderblue')
  } 
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.renderer.setStyle(this.elRef.nativeElement,'color','black')
    setTimeout(() => {
      this.renderer.setStyle(this.elRef.nativeElement,'border','none')
      },500)
  } 
}
