import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('Tasty Schnitzel','A super-tasty schnitzel - just awesome!','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',[
            new Ingredient("Meat", 1),
            new Ingredient('French Fries', 20)
        ]),new Recipe("Big Fat Burger","What else you need to say??","https://upload.wikimedia.org/wikipedia/commons/6/66/Burger_King_Big_King_XXL_Menu.jpg",[
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];
      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();  // return a copy of recipes.
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
    
}