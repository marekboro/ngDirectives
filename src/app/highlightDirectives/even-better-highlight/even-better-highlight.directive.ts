import {
  Directive,
  OnInit,

  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appEvenBetterHighlight]'
})
export class EvenBetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor1: string = 'blue';
  @Input() highlightColor2: string = 'orange';

  constructor() {

  }

  ngOnInit() {
    this.ourBackgroundColor = this.defaultColor
  }

  // @HostBinding('style.backgroundColor') ourBackgroundColor:string ='powderblue'; // ON the element that this directive sits on,  Access the Style propety and sub-property of backgroundColor and set it to: ourBackgroundColor
  @HostBinding('style.backgroundColor') ourBackgroundColor: string;// ON the element that this directive sits on,  Access the Style propety and sub-property of backgroundColor 
  @HostBinding('style.color') ourTextColor: string;  //Access the Style propety and sub-property of COLOR and set it to: ourTextColor
  @HostBinding('style.border') ourBorder: string;    //Access the Style propety and sub-property of BORDER and set it to: ourBorder

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.ourBackgroundColor = this.highlightColor1;
    this.ourTextColor = 'green';
    this.ourBorder = '2px solid yellow';

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.ourBackgroundColor = this.defaultColor;;
    this.ourTextColor = 'black';
    setTimeout(() => {
      this.ourBorder = 'none';
    }, 500)
  }
}