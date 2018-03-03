import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Account} from './components/new-account/new-account.component';
import {UsePropertyDecorator} from 'codelyzer/propertyDecoratorBase';
import {AccountsService} from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  /*providers:[AccountsService]*/
})
export class AppComponent implements OnInit{

 /* serverElements: {type: string, name: string, content: string }[] = [
    {type: 'server', name: 'Testserver', content: 'Just a test'},
    {type: 'blueprint', name: 'Testserver', content: 'Just a test'},
  ];

  onServerAdded(serverDate:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverDate.serverName,
      content: serverDate.serverContent,
    })
  };

  onBlueprintAdded(serverDate:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverDate.serverName,
      content: serverDate.serverContent,
    })
  };

  onChangeElement() {
    this.serverElements[0].name= 'changed!';
  }
*/
 /*
 numbers = [1,2,3,4,5];
 onlyOdd = false;
 oddNumbers = [1,3,5];
 evenNumbers = [2,4];
 value = 54;
*/
/*

  accounts: Account[] = [
    {
      name: 'Master Account',
      status:'actvie'
    },
    {
      name: 'Testaccount',
      status:'inactvie'
    },
    {
      name: 'Hidden Account',
      status:'unknown'
    },
  ];

*/
  accounts: Account[] = [];

  constructor(private accountService: AccountsService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }


  /*recipe project*/
 loadedFeature:string = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
