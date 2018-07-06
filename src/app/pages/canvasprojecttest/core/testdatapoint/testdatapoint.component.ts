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
	selector: 'testdatapoint',
	templateUrl: 'testdatapoint.component.html'
})
export class TestdatapointComponent implements OnInit
{
	testdatapointModel:TestdatapointModel;
	barchatchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testdatapointModel=new TestdatapointModel();
	}
	ngOnInit()
	{
		this.fetchbarchatchartLocalDataChart();
	}
	
	
	fetchbarchatchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.barchatchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestdatapointModel
{
}
