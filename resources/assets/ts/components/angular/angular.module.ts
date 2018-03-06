import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 
import { AngularComponent } from './angular.component';
 
@NgModule({
  	imports: [
    	BrowserModule
  	],
  	declarations: [
    	AngularComponent
  	],
  	bootstrap: [ AngularComponent ]
})

export class AngularModule { }