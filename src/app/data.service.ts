import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  	
  	cars = ['i10','figo','ecosport'];

  	myData()
  	 {

  		return 'this is data returned from dataservice';
  	



   	}

}
