import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServOutputService {
  
  //url = "https://restcountries.eu/rest/v2/all";
  url="https://api.mlab.com/api/1/databases/restcountries/collections/restcountriesdata?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
  
  userdata;
  constructor(public http:HttpClient) {
       
   }
    countriesdata(){
     return this.http.get(this.url)
    }     

}
