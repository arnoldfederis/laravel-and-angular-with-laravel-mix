import { Component } from '@angular/core';

@Component({
  	selector: 'angular',
  	template: require('./angular.component.html'),
  	styles: [
  		`${require('./angular.component.scss')}`,
  	]
})

export class AngularComponent { 

	ngOnInit(): void 
	{
		console.log('Laravel & Angular with Laravel Mix - Angular Component');
	}

}