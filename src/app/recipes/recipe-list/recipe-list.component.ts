import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Test recipe','A test run','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),new Recipe("Another test","chuma oru tst","https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg")
  ];
  @Output() recipeClicked = new EventEmitter<{name:string, description: string, imagePath : string}>() ;
  constructor() { }

  ngOnInit() {
  }
  onClick(recipe){
    console.log(recipe);
    this.recipeClicked.emit({
    name: recipe.name,
    description:recipe.description,
    imagePath : recipe.imagePath});
  }

}
