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
	selector: 'testallcomponent',
	templateUrl: 'testallcomponent.component.html'
})
export class TestallcomponentComponent implements OnInit
{
	testallcomponentModel:TestallcomponentModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testallcomponentModel=new TestallcomponentModel();
	}
	ngOnInit()
	{
	}
	
	click_testdrop(eventData:any)
	{ 
	} 
	
	
}

export class TestallcomponentModel
{
	 testdrop: string; 
	 testdate: string; 
}
