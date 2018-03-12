import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Account} from './components/new-account/new-account.component';
import {UsePropertyDecorator} from 'codelyzer/propertyDecoratorBase';
import {AccountsService} from './services/accounts.service';
import {ObsUsersService} from './project/services/obs-users.service';

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
  user1Activated: boolean = false;
  user2Activated: boolean = false;

  constructor(private accountService: AccountsService,private usersService: ObsUsersService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
    this.usersService.userActivated.subscribe(
      (id: number)=>{
        if(id === 1){ this.user1Activated = true; }
        else { this.user2Activated = true; }
      }
    )
  }


  /*recipe project*/
 // loadedFeature:string = 'recipe';
 //
 //  onNavigate(feature: string) {
 //    this.loadedFeature = feature;
 //  }

}
