import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../Services/recipes.service';

import { DinnerFilterPipe } from './dinner.pipe';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['../kitchen-pi-components.component.css']
})


export class DinnerComponent implements OnInit {

	recipes: any = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  	// get the recipes from the API
  	this.recipesService.getAllRecipes().subscribe(recipes => {
  		this.recipes = recipes;
  	});

  }

}
