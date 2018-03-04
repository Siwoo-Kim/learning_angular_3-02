import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {LoggingService} from '../../services/logging.service';
import {AccountsService} from '../../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /*providers:[ LoggingService, AccountsService ],*/
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
              private accountSerivce: AccountsService){
    this.accountSerivce.statusUpdated.subscribe(status => alert('NewStatus: '+status));
  }
  onCreateAccount(name: string, status: string){
    var account: Account = {name: name,status: status};
    /*var loggingService:LoggingService = new LoggingService();*/
    this.accountSerivce.addAccount(account);
    this.loggingService.logStatus(status);
  }

}

export interface Account{name: string, status: string;}
