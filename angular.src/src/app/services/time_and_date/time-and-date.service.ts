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

    return this.http.post(this.url + '/api/bullets/getTime', {}, { headers: headers })
      .map(res => res.json());

  }

  convertStringToDate(dateStr:string):Date{
    let year:number;
    let mounth:number;
    let day:number;

    let index=dateStr.indexOf('/');
    day= +dateStr.substring(0,index);
    dateStr=dateStr.substring(index+1,dateStr.length);
    index=dateStr.indexOf('/');
    mounth= +dateStr.substring(0,index);
    dateStr=dateStr.substring(index+1,dateStr.length);
    year=+dateStr;

    console.log(year+"  "+dateStr);

    return new Date(year,mounth,day);


  }
}

export class Date{
  constructor(private _year:number,private _mounth:number,private _day:number){}

  get year(){return this._year};
  get mounth(){return this._mounth};
  get day(){return this._day};

  compare(anotherDate:Date): number{
    if(this._year>anotherDate._year) return 1;
    else if(this._year<anotherDate._year) return -1;
    else{
      if(this._mounth>anotherDate._mounth) return 1;
      else if(this._mounth<anotherDate._mounth) return -1;
      else{
        if(this._day>anotherDate._day) return 1;
        else if(this._day<anotherDate._day) return -1;
        else return 0;
      }
    }
  }

  toString():string{
    return this._day+'/'+this._mounth+'/'+this._year;
  }
}