import {Component, Input, OnInit} from '@angular/core';
import {ServersService} from '../../services/servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit{

  @Input() server:{id: number, name: string, status: string};

  constructor(private serverService: ServersService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    const id = +this.route.params['id'];
    this.server = this.serverService.getServer(id);

    this.route.params.subscribe((params: Params)=>{
      this.server = this.serverService.getServer(+params['id']);
    });
  }

  onEdit() {
    // this.router.navigate(['/servers',this.server.id,'edit']);
    this.router.navigate(['edit'],
      {relativeTo:this.route,
        queryParamsHandling:'preserve'}
        );
  }
}
