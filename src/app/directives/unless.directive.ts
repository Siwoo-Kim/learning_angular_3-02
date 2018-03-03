import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input() set appUnless(value:boolean){
    value ?  this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
  }


}
