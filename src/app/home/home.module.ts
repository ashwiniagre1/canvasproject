/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/testui', loadChildren: './../pages/canvasprojecttest/core/testui/testui.module#TestuiModule'
     	},	
	     	{
     	path: 'core/testallcomponent', loadChildren: './../pages/canvasprojecttest/core/testallcomponent/testallcomponent.module#TestallcomponentModule'
     	},	
	     	{
     	path: 'core/testcharts', loadChildren: './../pages/canvasprojecttest/core/testcharts/testcharts.module#TestchartsModule'
     	},	
	     	{
     	path: 'core/testoneui', loadChildren: './../pages/canvasprojecttest/core/testoneui/testoneui.module#TestoneuiModule'
     	},	
	     	{
     	path: 'core/testdash', loadChildren: './../pages/canvasprojecttest/core/testdash/testdash.module#TestdashModule'
     	},	
	     	{
     	path: 'core/testdatapoint', loadChildren: './../pages/canvasprojecttest/core/testdatapoint/testdatapoint.module#TestdatapointModule'
     	},	
	     	{
     	path: 'core/testlogin', loadChildren: './../pages/canvasprojecttest/core/testlogin/testlogin.module#TestloginModule'
     	},	
	     	{
     	path: 'core/testmap', loadChildren: './../pages/canvasprojecttest/core/testmap/testmap.module#TestmapModule'
     	},	
	     	{
     	path: 'core/testwomap', loadChildren: './../pages/canvasprojecttest/core/testwomap/testwomap.module#TestwomapModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}