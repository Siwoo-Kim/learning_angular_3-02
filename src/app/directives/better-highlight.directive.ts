import {Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input} from '@angular/core';
import * as $ from 'jquery/dist/jquery.slim';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.borderBottom') borderBottom: string;
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');*/
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');*/
    this.backgroundColor = this.highlightColor;
    this.borderBottom = '6px solid black';
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
    this.borderBottom = '';
  }
}
