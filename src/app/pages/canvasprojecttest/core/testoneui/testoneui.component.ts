/**
 * Created by: Ashwini Agre
 * Date: 06/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testoneui',
	templateUrl: 'testoneui.component.html'
})
export class TestoneuiComponent implements OnInit
{
	testoneuiModel:TestoneuiModel;
	testbubblechartLocalData:any;
	testcandelchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testoneuiModel=new TestoneuiModel();
	}
	ngOnInit()
	{
		this.fetchtestbubblechartLocalDataChart();
		this.fetchtestcandelchartLocalDataChart();
	}
	
	
	fetchtestbubblechartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.testbubblechartLocalData = reponseData.data;
		}
		);
	}
	fetchtestcandelchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.testcandelchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestoneuiModel
{
}
