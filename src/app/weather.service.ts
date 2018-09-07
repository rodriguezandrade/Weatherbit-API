import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  daylyForecast(): any {
    return this._http.get("https://api.weatherbit.io/v2.0/forecast/daily?key=3dd1694285a347d4ac8c5c20608f68de&postal_code=85000&country=MX")
    .map(result=>result)
  }

  constructor(private _http: HttpClient) { }

  

}
