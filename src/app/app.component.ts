 import {Component, ElementRef, OnInit, AfterViewInit,ViewChild} from '@angular/core';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
   
})
export class AppComponent  implements  OnInit, AfterViewInit{

	elementRef: ElementRef;
	constructor(elementRef: ElementRef) {
		this.elementRef = elementRef;
	}
	ngOnInit() {

	};

	ngAfterViewInit() {
		
	}

}
