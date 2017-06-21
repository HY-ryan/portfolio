import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const kitchenPiApi = 'http://localhost:8000/api/recipes';

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getAllRecipes() {
  	return this.http.get(kitchenPiApi)
  		.map(res => res.json());
  }

}
