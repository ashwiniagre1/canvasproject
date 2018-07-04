/**
 * Created by: Ashwini Agre
 * Date: 04/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit
{
	testuiModel:TestuiModel;
	state_Data:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testuiModel=new TestuiModel();
		this.state_Data=[];
	}
	ngOnInit()
	{
	}
	
	click_country(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.testuiModel.country).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryBindResponse_1(response);
		});
	}
	countryBindResponse_1(response: any)
	{
		this.state_Data=response.response;
		
	} 
	
	
}

export class TestuiModel
{
	 country: string; 
	 state: string; 
	 typecountry: string; 
}
