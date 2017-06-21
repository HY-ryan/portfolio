import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dinnerFilter' })

export class DinnerFilterPipe implements PipeTransform {

	transform(value) {
		return `'hello' $(value) `;
	}

}