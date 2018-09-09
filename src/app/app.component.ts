import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
  import { Http,Response } from '@angular/http';
 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService]
})
        export class AppComponent {
        chart=[ ];
          title = 'dashboardWeather';
            private apiUrl='https://api.weatherbit.io/v2.0/forecast/daily?days=16&city_id=4013704&units=M&key=3dd1694285a347d4ac8c5c20608f68de';
           data:any={};
           list=[ ];
          constructor(private _weather:WeatherService ){
              this.list=_weather.getCities();    

           
          }
         
          Filter(value:any){
            alert(value);
            }
          ngOnInit(){
        this._weather.daylyForecast()
          .subscribe(res=>{
           
            let max_temp=res['data'].map(res=>res.max_temp)
            let min_temp=res['data'].map(res=>res.min_temp)
            let alldates=res['data'].map(res=>res.datetime)
            //console.log(alldates)
          
            let weatherDates=[]
            alldates.forEach((res)=>{
              let jsdate=new Date(res )
              weatherDates.push(jsdate.toLocaleDateString('en',{year: 'numeric', month: 'long', day: 'numeric' }))
            })
            
            // let max_temp1=[]
            // alldates.forEach((res)=>{
            //   let jsdate=new Date(res )
            //   max_temp1.push(jsdate.toLocaleDateString)
            // })
        

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
            borderColor:'#FF3D00',
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
          }] }
        } })
        
        
        // this.chart=new Chart('test',{
        
        //   data:{
        //     labels:weatherDates,
        //     datasets:[{
        //       data:max_temp,
              
        //     }
             
        //     ]
        //   },
        //     })

          
          })
          } 
        }
