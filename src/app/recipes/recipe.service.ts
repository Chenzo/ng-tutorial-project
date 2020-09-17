
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('a test Recipe', 
        "This is a test only", 
        "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg",
        [
            new Ingredient("meat", 1),
            new Ingredient("French Fires", 20)
        ]
        ),
        new Recipe('a second Recipe', 
        "two is the magic number", 
        "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg",
        [
            new Ingredient("buns", 2),
            new Ingredient("meat", 1)
        ]),
    ];
 
    
    getRecipes() {
        return this.recipes.slice();
    }
}