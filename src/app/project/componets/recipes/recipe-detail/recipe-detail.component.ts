import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.model';
import {RecipeService} from '../../../services/recipe.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  recipeId: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router){ }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
    this.route.params
      .subscribe((params: Params)=>{
        this.recipe = this.recipeService.getRecipe(+params['id']);
        this.recipeId = +params['id'];
    })
  }


  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
