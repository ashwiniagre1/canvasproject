import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"TestUi","routerLink":"core/testui","selected":false},{"text":"Testallcomponent","routerLink":"core/testallcomponent","selected":false},{"text":"Testcharts","routerLink":"core/testcharts","selected":false},{"text":"Testoneui","routerLink":"core/testoneui","selected":false},{"text":"Testdash","routerLink":"core/testdash","selected":false},{"text":"Testdatapoint","routerLink":"core/testdatapoint","selected":false},{"text":"Testlogin","routerLink":"core/testlogin","selected":false},{"text":"Testmap","routerLink":"core/testmap","selected":false},{"text":"Testwomap","routerLink":"core/testwomap","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
