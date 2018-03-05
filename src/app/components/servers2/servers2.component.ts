import { Component, OnInit } from '@angular/core';
import {ServersService} from '../../services/servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers2',
  templateUrl: './servers2.component.html',
  styleUrls: ['./servers2.component.css']
})
export class Servers2Component implements OnInit{
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router:Router,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['/servers'],{relativeTo:this.route,});
  }
}
