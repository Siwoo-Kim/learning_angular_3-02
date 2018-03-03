import {ViewChild,Output, ElementRef,Component, EventEmitter, OnInit} from '@angular/core';
import * as $ from 'jquery/dist/jquery.slim';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated: EventEmitter<{  serverName: string, serverContent: string}> = new EventEmitter<{  serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated: EventEmitter<{  serverName: string, serverContent: string}> = new EventEmitter<{  serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  newServerName:string = '';
  newServerContent:string = '';

  constructor() {

  }

  onAddServer(newServerName: string){
    console.log( $(this.serverContentInput.nativeElement) );
    this.serverCreated.emit({
      serverName: newServerName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(newServerName: string){
    this.blueprintCreated.emit({
      serverName: newServerName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
