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
    AccountComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [LoggingService,AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
