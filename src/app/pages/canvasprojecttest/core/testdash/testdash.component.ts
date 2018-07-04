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
	selector: 'testdash',
	templateUrl: 'testdash.component.html'
})
export class TestdashComponent implements OnInit
{
	testdashModel:TestdashModel;
	testdaschartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testdashModel=new TestdashModel();
	}
	ngOnInit()
	{
		this.fetchtestdaschartLocalDataChart();
	}
	
	
	fetchtestdaschartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/country/findall').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.testdaschartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestdashModel
{
}
