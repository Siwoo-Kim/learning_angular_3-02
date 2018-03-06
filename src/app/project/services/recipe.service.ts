import {Recipe} from '../models/recipe.model';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1',
      'This is simply a test',
      'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'
      ,[
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20),
      ]
    ),
    new Recipe('A Test Recipe2',
      'This is simply a test',
      'http://del.h-cdn.co/assets/17/34/980x490/landscape-1503418862-chicken-thighs-delish.jpg'
    ,[
        new Ingredient('Buns',2),
        new Ingredient('Meat',1),
      ]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();


  constructor(private slService:ShoppingListService){}

  getRecipes() :Recipe[]{
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIgredients(ingredients);
  }

}
