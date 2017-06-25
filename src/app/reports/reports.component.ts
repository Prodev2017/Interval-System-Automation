import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
declare var $: any;
declare var Pleasure: any;
declare var Layout: any;
declare var FormsSwitch: any;
declare var FormsSwitchery: any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
		Pleasure.init();
   	Layout.init();
		FormsSwitch.init();
		FormsSwitchery.init();
	});
  }

}
