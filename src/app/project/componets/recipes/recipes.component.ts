import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {}

}
