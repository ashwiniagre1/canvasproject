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
	selector: 'testcharts',
	templateUrl: 'testcharts.component.html'
})
export class TestchartsComponent implements OnInit
{
	testchartsModel:TestchartsModel;
	testareachartLocalData:any;
	testbarchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testchartsModel=new TestchartsModel();
	}
	ngOnInit()
	{
		this.fetchtestareachartLocalDataChart();
		this.fetchtestbarchartLocalDataChart();
	}
	
	
	fetchtestareachartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.testareachartLocalData = reponseData.data;
		}
		);
	}
	fetchtestbarchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.testbarchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestchartsModel
{
}
