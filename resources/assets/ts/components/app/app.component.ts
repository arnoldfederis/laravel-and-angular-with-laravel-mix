import { Component } from '@angular/core';

@Component({
  	selector: 'app',
  	template: require('./app.component.html'),
  	styles: [
  		`${require('./app.component.scss')}`,
  	]
})

export class AppComponent { 

	ngOnInit(): void 
	{
		console.log('Laravel & Angular with Laravel Mix - App Component');
	}

}