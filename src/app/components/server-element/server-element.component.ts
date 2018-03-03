import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges, DoCheck,
} from '@angular/core';
import * as $ from 'jquery/dist/jquery.slim';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , OnChanges, DoCheck{

  @Input('srvElement') element: {type: string, name: string, content: string} ;
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(simpleChange: SimpleChanges){
    console.log(simpleChange);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCehck called!');
  }

}
