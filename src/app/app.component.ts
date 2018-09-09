import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
        export class AppComponent {
        chart=[ ];
          title = 'dashboardWeather';
          constructor(private _weather:WeatherService){}
          ngOnInit(){
        this._weather.daylyForecast()
          .subscribe(res=>{
            console.log(res)
            let max_temp=res['data'].map(res=>res.max_temp)
            let min_temp=res['data'].map(res=>res.min_temp)
            let alldates=res['data'].map(res=>res.datetime)
            console.log(alldates)
          
            let weatherDates=[]
            alldates.forEach((res)=>{
              let jsdate=new Date(res )
              weatherDates.push(jsdate.toLocaleDateString('en',{year: 'numeric', month: 'long', day: 'numeric' }))
            })
       
       
       
        this.chart=new Chart('canvas',{
        type:'line',
        data:{
          labels:weatherDates,
          datasets:[{
            data:max_temp,
            borderColor:'#0288D1',
            fill:false
          },
          {
            data:min_temp,
            borderColor:'#FFAB00',
            fill:false
          },
          ]
        },
        options:{
          elements: {
            line: {
                tension: 0
            }
        },
        legend:{
          display:false
        },
        scales:{
          xAxes:[{
            display:true
          }],
          yAxes:[{
            display:true
          }]
        }
        }

        })
        
        

          
          })
          } 
        }
