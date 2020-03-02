import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',

})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    console.log(this.recipe.ingredients);
  }
 

}