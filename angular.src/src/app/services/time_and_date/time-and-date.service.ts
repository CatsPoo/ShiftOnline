import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeAndDateService {
  private http: Http;
  private url: String = 'http://localhost:3000';

  constructor(_http: Http) {
    this.http = _http;
  }

  getCurrentTime() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + '/bullets/getTime', {}, { headers: headers })
      .map(res => res.json());

  }
}

export class Date{
  constructor(private _year:number,private _mounth:number,private _day:number){}

  get year(){return this._year};
  get mounth(){return this._mounth};
  get day(){return this._day};

  compare(anotherDate:Date): number{
    if(this.year>anotherDate.year) return 1;
    else if(this.year<anotherDate.year) return -1;
    else{
      if(this.mounth>anotherDate.mounth) return 1;
      else if(this.mounth<anotherDate.mounth) return -1;
      else{
        if(this.day>anotherDate.day) return 1;
        else if(this.day<anotherDate.day) return -1;
        else return 0;
      }
    }
  }

  toString():string{
    return this._year+'/'+this._mounth+'/'+this._day;
  }
}