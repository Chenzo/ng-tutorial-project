import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('a test Recipe', "This is a test only", "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg")
  ];


  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {
  }

}
