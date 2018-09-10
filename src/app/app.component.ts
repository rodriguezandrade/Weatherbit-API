import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
  import { Http,Response } from '@angular/http';
 
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService]
})
        export class AppComponent {
          ciudadcodigo: string="4013704";
  unidad : string;
  jsonList : any;


        chart=[ ];
          title = 'dashboardWeather';
             cities=[];
             units=[];
             unitsstatus:string="";
              codecity:any[];
              units2:any[];
           maxima:any[ ];
            id:string="";
            response:any[ ];
          constructor(private http:HttpClient,private _weather:WeatherService ){

        this.cities=this._weather.getCities()
        this.units=this._weather.getUnits()
        this._weather.default();

        this._weather.daylyForecast()
        .subscribe(res=>{
        let max_temp=res['data'] 
        
        console.log(this.maxima)
      })
 
       }


          
          Filter(ciudadcodigo : string, unidad : string): void {
      //  Filter(event:any){
        this.ciudadcodigo=ciudadcodigo;
        this.unidad = unidad;
        console.log(this.ciudadcodigo) 
         
        this.unitsstatus='https://api.weatherbit.io/v2.0/forecast/daily?days=15&units=M&key=3dd1694285a347d4ac8c5c20608f68de&city_id='+this.ciudadcodigo;
        this.http.get(this.unitsstatus)
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
    //  Filter (event:any) {
    //   alert( event);
 
    // }
          ngOnInit(){
            this.ciudadcodigo = null;
    this.unidad= "SELECT";
    this.jsonList= [  {"ciudadcodigo" : "4013704", "unidad" : "I"},      {"ciudadcodigo" : "4013702",       "unidad" : "M"}  ]
        
          }
         
    
         
        }
