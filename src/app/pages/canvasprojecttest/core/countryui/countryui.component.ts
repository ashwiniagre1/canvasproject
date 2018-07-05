/**
 * Created by: Ashwini Agre
 * Date: 05/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'countryui',
	templateUrl: 'countryui.component.html'
})
export class CountryuiComponent implements OnInit
{
	countryuiModel:CountryuiModel;
	stateId_Data:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.countryuiModel=new CountryuiModel();
		this.stateId_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.countryuiModel.countryId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryIdBindResponse_1(response);
		});
	}
	countryIdBindResponse_1(response: any)
	{
		this.stateId_Data=response.response;
		
	} 
	
	
}

export class CountryuiModel
{
	 countryId: string; 
	 stateId: string; 
}
