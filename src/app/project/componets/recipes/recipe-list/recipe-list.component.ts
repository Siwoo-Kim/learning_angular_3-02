import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import {RecipeService} from '../../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  /*
    onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
    }
  */
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
