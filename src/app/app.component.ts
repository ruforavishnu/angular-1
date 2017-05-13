import { Component } from '@angular/core';
import { DataService} from './data.service'; 
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<h1>The web app of html</h1>

  <p>Begin web app</p>
  
  

  <button [@myAwesomeAnimation]='state' (click)="animateMe()"> I'm an animatable button</button>
  `,
  styles: [`
	button {
		width:200px;
		background:lightgrey;
		margin:200px auto;
		text-align: center;
		padding:20px;
		font-size:1.5em;

	}
  `],
  	animations: [
  	trigger('myAwesomeAnimation',
  		[
  			state('small',style(
  			{
  				transform:'scale(1)'

  			})),
  			state('large',style(
  			{
  				transform:'scale(1.2)'

  			})),
  			transition('small <=> large', animate('300ms ease-in', style({
  				transform:'translateY(40px)'
  			}))),

  		]),
  	]
  
})
export class AppComponent 
{
state:string = 'small';

  constructor(private dataService:DataService)
{ }
	

	animateMe() 
	{
		this.state = (this.state==='small'? 'large':'small');
	}


  
}
