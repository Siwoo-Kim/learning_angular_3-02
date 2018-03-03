import {Directive, ElementRef, OnInit} from '@angular/core';
import * as $ from 'jquery/dist/jquery.slim';

@Directive({
  selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef:ElementRef){}

  ngOnInit(): void {
    /*this.elementRef.nativeElement.style.backgroundColor = 'green';*/
    $(this.elementRef.nativeElement).css({backgroundColor:'green'});
  }
}
