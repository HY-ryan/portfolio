import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private http: Http) {

   }

   ingredientNum = 1;
   stepNum = 1;

   addIngredientField() {
   	event.preventDefault();
   	var input = document.createElement('input');
   	input.type = "text";
   	input.id = "ingredients[" + this.ingredientNum + "]";
   	input.name = "ingredients[" + this.ingredientNum + "]";
   	input.className = 'form-control';
   	document.getElementById('ingredient-fields').appendChild(input);
   	this.ingredientNum++;
   }

   addStepsField() {
   	event.preventDefault();
   	var stepInput = document.createElement('input');
   	stepInput.type = "text";
   	stepInput.id = 'steps[' + this.stepNum + ']';
   	stepInput.name = 'steps[' + this.stepNum + ']';
   	stepInput.className = 'form-control';
   	document.getElementById('steps-fields').appendChild(stepInput);
   	this.stepNum++;

   }

  ngOnInit() {

  }
}
