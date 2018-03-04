import {Ingredient} from '../models/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService{
  private ingredients :Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10),
  ];
  ingredientChanged:EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[]  {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient): void{
    this.ingredients.push(newIngredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIgredients(ingredients: Ingredient[]) {
    /*
    for(let ingredient of ingredients){

    }
    */
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
