import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  disallowNewServer: boolean = true;
  serverCreationStatus = 'No Server was created!';
  serverName: string = 'TestServer';
  serverCreate: boolean = false;
  servers = ['Testserver','Testserver2'];

  constructor() {
    setTimeout(()=>{
      this.disallowNewServer = false;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(event:Event){
    /*console.log(event);*/
    this.serverCreate = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
