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
	selector: 'testwomap',
	templateUrl: 'testwomap.component.html'
})
export class TestwomapComponent implements OnInit
{
	testwomapModel:TestwomapModel;
	treemaptestchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testwomapModel=new TestwomapModel();
	}
	ngOnInit()
	{
		this.fetchtreemaptestchartLocalDataChart();
	}
	
	
	fetchtreemaptestchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.treemaptestchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestwomapModel
{
}
