import { Component, OnInit } from '@angular/core';

import { RecipesService } from './Services/recipes.service';

@Component({
  selector: 'app-kitchen-pi-components',
  templateUrl: './kitchen-pi-components.component.html',
  styleUrls: ['./kitchen-pi-components.component.css'],
})

export class KitchenPiComponentsComponent implements OnInit {

  recipes: any = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  	// get the recipes from the API
  	this.recipesService.getAllRecipes().subscribe(recipes => {
  		this.recipes = recipes;
  	});
  }


}
