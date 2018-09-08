import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dashboardWeather';
  constructor(private _weather:WeatherService){}
  ngOnInit(){
this._weather.daylyForecast()
  .subscribe(res=>{
    let max_temp=res['data'].map(res=>res.max_temp)
    let min_temp=res['data'].map(res=>res.min_temp)
    let alldates=res['data'].map(res=>res.dt)
   
    let weatherDates=[]
    min_temp.forEach((res)=>{
      let jsdate=new Date(res )
      weatherDates.push(jsdate.toLocaleTimeString('en',{year:'numeric', month:'short  ',day:'numeric'}))
    })
 

  })
  }
}
