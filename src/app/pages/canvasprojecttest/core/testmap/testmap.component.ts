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
	selector: 'testmap',
	templateUrl: 'testmap.component.html'
})
export class TestmapComponent implements OnInit
{
	testmapModel:TestmapModel;
	geocharttestchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testmapModel=new TestmapModel();
	}
	ngOnInit()
	{
		this.fetchgeocharttestchartLocalDataChart();
	}
	
	
	fetchgeocharttestchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.geocharttestchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestmapModel
{
}
