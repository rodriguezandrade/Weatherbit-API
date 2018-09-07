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
  console.log(res)
  })
  }
}
