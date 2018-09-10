import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
import { Chart } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  maxima:any[ ];
  response:any[ ];
  
  chart=[ ];
 
  daylyForecast(): any {
    return this._http.get("https://api.weatherbit.io/v2.0/forecast/daily?days=16&city_id=4013704&units=M&key=3dd1694285a347d4ac8c5c20608f68de")
    .map(result=>result)
  }


  default() {
  
    this.daylyForecast()
        .subscribe((res)=> {
          let response=res['data'] ;
          this.maxima=response  
          this.response=response
         //console.log(this.response);
         let max_temp=res['data'].map(res=>res.max_temp)
         let min_temp=res['data'].map(res=>res.min_temp)
         let alldates=res['data'].map(res=>res.valid_date)
         // console.log(alldates)
         
     this.chart=new Chart('canvas',{
     type:'line',
     data:{
       labels:alldates,
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
                 } 
       })
        }) 
  
     
  }
getCities() {
  
  return [  {"ciudad" : "Navojoa", "codigo" : "3995019"},{"ciudad" : "Hermosillo", "codigo" : "4004898"},{"ciudad" : "Nogales", "codigo" : "4004886"} ]

   
}

getUnits() {
  return ['M',
 'I' 
]}


  constructor(private _http: HttpClient) { }
 

}
