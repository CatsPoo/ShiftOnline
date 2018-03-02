import { Date } from './../time_and_date/time-and-date.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HanhayotService {
  private http:Http;
  private url:String='http://localhost:3000/api/hanhayot/';

  constructor(http:Http) {
    this.http=http;
   }
/*
  getHanhayot() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getAllBullets', {}, { headers: headers}).map(res=>res.json());
  }
  */

 getHanhayot() {
   //return [new Hanhaya("test",new Date(1,1,1),new Date(2,2,2),"test"),
   //new Hanhaya("test3",new Date(3,3,3),new Date(4,4,4),"test")]

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getAllHanhayot', {}, { headers: headers}).map(res=>res.json());
  
 }

  removeHanhayot(hanhayaID){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+'removeBullet', {id: hanhayaID}, { headers: headers}).map(res=>res.json());
  }

  addHanhayot(newHanhaya){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addBullet', {
      "name": newHanhaya.name,
      "startDate": newHanhaya.startDate,
      "endDate": newHanhaya.endDate,
      "color": "red",
      "content": newHanhaya.content}
       , { headers: headers}).map(res=>res.json());
  }
}

export class Hanhaya{
  private _id:number;
  private _color:string;
  constructor(
    private _name:string,
    private _startDate:Date,
    private _endDate:Date,
    private _content:string){}

    get id(){return this._id;}
    get name(){return this._name;}
    get startDate(){return this._startDate;}
    get endDate(){return this._endDate;}
    get content(){return this._content;}
    get color(){return this._color;}

    set id(value:number){this._id=value;}
    set name(value:string){this._name=value;}
    set endDate(value:Date){this._endDate=value;}
}

export class CreateHanhayaModalData{
  constructor(private _name:string,private _startDate:Date,private _endDate:Date){}
  get name(){return this._name;}
  get startDate(){return this._startDate;}
  get endDate(){return this._endDate;}

}
