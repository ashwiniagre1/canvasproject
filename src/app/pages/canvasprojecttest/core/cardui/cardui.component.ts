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
	selector: 'cardui',
	templateUrl: 'cardui.component.html'
})
export class CarduiComponent implements OnInit
{
	carduiModel:CarduiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.carduiModel=new CarduiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class CarduiModel
{
}
