import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appEvenBetterHighlight]'
})
export class EvenBetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    
  }

  @HostBinding('style.backgroundColor') ourBackgroundColor:string ='powderblue'; // ON the element this directive sits Access the Style propety and sub-property of backgroundColor and set it to: ourBackgroundColor
  @HostBinding('style.color') ourTextColor:string; 
  @HostBinding('style.border') ourBorder:string; 

  @HostListener('mouseenter') mouseover(eventData:Event) {  
    this.ourBackgroundColor='orange';
    this.ourTextColor='green';
    this.ourBorder='2px solid yellow';

  } 
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.ourBackgroundColor='transparent';
    this.ourTextColor='black';
    setTimeout(() => {
      this.ourBorder='none';
      },500)
  } 
}