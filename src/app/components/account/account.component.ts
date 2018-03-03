import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from '../../services/logging.service';
import {AccountsService} from '../../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  /*providers: [LoggingService,AccountsService],*/
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;
  /*@Output() statusChanged: EventEmitter<{id: number,status: string}> = new EventEmitter<{id: number, status: string}>();*/
  constructor(private loggingService: LoggingService,
              private accountService: AccountsService
  ){}

  onSetTo(status: string){
    /*this.statusChanged.emit({id: this.id, newStatus: status});*/
    this.loggingService.logStatus(status);
    this.accountService.updateStatus(this.id,status);
  }

}
