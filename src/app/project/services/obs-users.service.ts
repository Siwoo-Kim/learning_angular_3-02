import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ObsUsersService {
  userActivated = new Subject();

}
