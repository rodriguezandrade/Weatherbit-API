import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  daylyForecast(): any {
    return this._http.get("https://api.weatherbit.io/v2.0/forecast/daily?days=16&city_id=4013704&units=M&key=3dd1694285a347d4ac8c5c20608f68de")
    .map(result=>result)
  }


  
getCities() {
   return ['Obregón',
  'Navojoa',
  'Hermosillo',
  'Nogales'
]


}



  constructor(private _http: HttpClient) { }
 

}
