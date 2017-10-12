import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TimeAndDateService {
  private http:Http;
  private url='http://localhost:3000/';
  constructor(http:Http) {
    this.http=http;
   }

  getCurrentTime(){
    //get time from server (to get one time for each client)
    console.log("TODO get time from server")
    let res=this.http.post(this.url+'getTime',{});
    console.log(res);
  }

}

class TimeAndDate{
  constructor(private _year:number,private _mounth:number,private _day:number,private _houer?:number,private _minute? :number,private _second?:number){}
}
