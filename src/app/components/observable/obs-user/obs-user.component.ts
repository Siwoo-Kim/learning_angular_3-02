import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ObsUsersService} from '../../../project/services/obs-users.service';

@Component({
  selector: 'app-obs-user',
  templateUrl: './obs-user.component.html',
  styleUrls: ['./obs-user.component.css']
})
export class ObsUserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,private usersService: ObsUsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params)=>{
        this.id = +params['id'];
      });
  }

  onActivated() {
    this.usersService.userActivated.next(this.id);
  }
}
