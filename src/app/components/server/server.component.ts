import { Component } from '@angular/core';

@Component({
  templateUrl: 'server.component.html',
  selector: 'app-server',
  styles: [`
    .online {
      color : white
    }
  `],
})
export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() >= 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string{
    return this.serverStatus;
  }

  getColor() {
    switch (this.serverStatus){
      case 'online' : return 'green'
      default : return 'red'
    }
  }
}
