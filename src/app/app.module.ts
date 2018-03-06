import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ServerComponent} from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './project/componets/header/header.component';
import { RecipesComponent } from './project/componets/recipes/recipes.component';
import { RecipeListComponent } from './project/componets/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project/componets/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project/componets/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/componets/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/componets/shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';
import { BasicHighlightDirective} from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import {DropdownDirective} from './project/directives/dropdown.driective';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AccountComponent } from './components/account/account.component';
import {LoggingService} from './services/logging.service';
import {AccountsService} from './services/accounts.service';
import {RecipeService} from './project/services/recipe.service';
import {ShoppingListService} from './project/services/shopping-list.service';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { Servers2Component } from './components/servers2/servers2.component';
import { UserComponent } from './components/user/user.component';
import { EditServerComponent } from './components/edit-server/edit-server.component';
import { Server2Component } from './components/server2/server2.component';
import {ServersService} from './services/servers.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {CanDeactivateGuard} from './components/edit-server/can-deactivate-edit-server.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {ServerResolverService} from './components/server2/server-resolver.service';
import { RecipeEditComponent } from './project/componets/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './project/componets/recipes/recipe-start/recipe-start.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    UsersComponent,
    Servers2Component,
    UserComponent,
    EditServerComponent,
    Server2Component,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    LoggingService,
    AccountsService,
    RecipeService,
    ShoppingListService,
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
