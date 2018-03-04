import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  /*
  ingredients :Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10),
  ];
  */
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService.ingredientChanged
      .subscribe((ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      })
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
/*
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
*/
}
