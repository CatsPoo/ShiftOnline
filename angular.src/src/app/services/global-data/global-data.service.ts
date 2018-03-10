import { Date } from './../time_and_date/time-and-date.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalDataService {

  private http:Http;
  private url:String='http://84.108.39.139:3000/api/global-data/';

   constructor(http:Http) {
    this.http=http;
   }

   getBasesList(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getBasesList',{
      
    },{headers: headers}).map(res=>res.json());
   }

}
