import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../Services/recipes.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['../kitchen-pi-components.component.css']
})
export class BreakfastComponent implements OnInit {

  recipes: any = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  	// get the recipes from the API
  	this.recipesService.getAllRecipes().subscribe(recipes => {
  		this.recipes = recipes;
  	});

  }

}
