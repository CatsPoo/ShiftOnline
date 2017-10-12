import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TimeAndDateService {
  private http:Http;
  private url:String='http://localhost:3000';

  constructor(_http:Http) {
    this.http=_http;
   }

  getCurrentTime():string{
    return 'TODO get date from server';
  }

}

class TimeAndDate{
  constructor(private _year:number,private _mounth:number,private _day:number,private _houer?:number,private _minute?:number,private _second?:number){}
}
