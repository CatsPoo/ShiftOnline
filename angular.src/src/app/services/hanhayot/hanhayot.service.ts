import { Date } from './../time_and_date/time-and-date.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HanhayotService {
  private http:Http;
  private url:String='http://84.108.39.139:3000/api/hanhayot/';

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
 updateContent(hanhayaID,content){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.url+'updateContent',{
    "hanhayaID":hanhayaID,
    "content":content
  },{headers: headers}).map(res=>res.json());
 }
  removeHanhayot(hanhayaID){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+'removeHanhaya', {id: hanhayaID}, { headers: headers}).map(res=>res.json());
  }

  addHanhayot(newHanhaya){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addHanhaya', {
      "name": newHanhaya.name,
      "startDate": newHanhaya.startDate,
      "endDate": newHanhaya.endDate,
      "color": "red",
      "content": newHanhaya.content}
       , { headers: headers}).map(res=>res.json());
  }

  updateHanhaya(hanhayaID,hanhayaData:CreateHanhayaModalData){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'updateHanhaya', {
      "hanhayaID":hanhayaID,
      "name": hanhayaData.name,
      "startDate": hanhayaData.startDate.toString(),
      "endDate": hanhayaData.endDate.toString(),
      "color": "red"}
       , { headers: headers}).map(res=>res.json());
  }
}

export class Hanhaya{
  private _id:number;
  private _color:string;
  private _index:number;
  constructor(
    private _name:string,
    private _startDate:string,
    private _endDate:string,
    private _content:string){}

    get id(){return this._id;}
    get name(){return this._name;}
    get startDate(){return this._startDate;}
    get endDate(){return this._endDate;}
    get content(){return this._content;}
    get color(){return this._color;}
    get index(){return this._index;}

    set id(value:number){this._id=value;}
    set name(value:string){this._name=value;}
    set startDate(value:string){this._startDate=value;}
    set endDate(value:string){this._endDate=value;}
    set index(value:number){this._index=value;}
}

export class CreateHanhayaModalData{
  constructor(private _name:string,private _startDate:Date,private _endDate:Date){}
  get name(){return this._name;}
  get startDate(){return this._startDate;}
  get endDate(){return this._endDate;}

}
