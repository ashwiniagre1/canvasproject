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
	selector: 'testlogin',
	templateUrl: 'testlogin.component.html'
})
export class TestloginComponent implements OnInit
{
	testloginModel:TestloginModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testloginModel=new TestloginModel();
	}
	ngOnInit()
	{
	}
	
	onClick_login(eventData:any)
	{ 
		let response: any;
		this.http.get().subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.loginBindResponse_1(response);
		});
	}
	loginBindResponse_1(response: any)
	{
		
	} 
	
	
}

export class TestloginModel
{
	 email: string; 
	 password: string; 
}
