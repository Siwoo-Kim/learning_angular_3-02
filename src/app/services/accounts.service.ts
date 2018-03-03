import {Account} from '../components/new-account/new-account.component';

export class AccountsService{
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

  addAccount(newAccount: Account){
    this.accounts.push(newAccount);
  }

  updateStatus(id: number, updateStatus: string){
    this.accounts[id].status = updateStatus;
  }
}
