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
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {ServerResolverService} from './components/server2/server-resolver.service';
import {RecipesComponent} from './project/componets/recipes/recipes.component';
import {ShoppingListComponent} from './project/componets/shopping-list/shopping-list.component';
import {AppComponent} from './app.component';
import {RecipeEditComponent} from './project/componets/recipes/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './project/componets/recipes/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './project/componets/recipes/recipe-start/recipe-start.component';

// const appRoutes: Routes = [
//   {path: '', component: HomeComponent, pathMatch: 'full'},
//   {path: 'users', component: UsersComponent, children: [
//       {path: ':id/:name', component: UserComponent},
//     ]},
//   {path: 'servers',
//     //canActivate: [AuthGuard,],
//     canActivateChild: [AuthGuard],
//     component: Servers2Component,
//     children: [
//       {path:':id', component: Server2Component, resolve: {server:ServerResolverService}},
//       {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
//     ]},
//   {path : 'not-found', component: ErrorPageComponent,data:{message: 'Page not found!'} },
//   {path : '**', redirectTo: '/not-found'}
// ];

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch : 'full'},
  {path: 'recipes', component: RecipesComponent, children: [{
      path: '', component: RecipeStartComponent,
      path: 'edit', component: RecipeEditComponent,
      path: ':id', component: RecipeDetailComponent,
    }]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash:true} ),],
  exports:[RouterModule],
})
export class AppRoutingModule { }
