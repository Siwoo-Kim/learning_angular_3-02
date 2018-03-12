import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  /*
  ingredients :Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10),
  ];
  */
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientChanged
      .subscribe((ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      })
  }
/*
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
*/
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
