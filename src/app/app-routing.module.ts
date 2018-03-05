import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditServerComponent} from './components/edit-server/edit-server.component';
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {UserComponent} from './components/user/user.component';
import {Servers2Component} from './components/servers2/servers2.component';
import {HomeComponent} from './components/home/home.component';
import {Server2Component} from './components/server2/server2.component';
import {AuthGuard} from './services/auth-guard.service';
import {CanDeactivateGuard} from './components/edit-server/can-deactivate-edit-server.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]},
  {path: 'servers',
    //canActivate: [AuthGuard,],
    canActivateChild: [AuthGuard],
    component: Servers2Component,
    children: [
      {path:':id', component: Server2Component},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ]},
  {path : 'not-found', component: PageNotFoundComponent},
  {path : '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
