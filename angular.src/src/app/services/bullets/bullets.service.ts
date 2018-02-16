import { Date } from './../time_and_date/time-and-date.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BulletsService {
  private http:Http;
  private url:String='http://localhost:3000/api/bullets/';

  constructor(http:Http) {
    this.http=http;
   }

  getBullets() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getAllBullets', {}, { headers: headers}).map(res=>res.json());
  }

  removeBullet(bulletID){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+'removeBullet', {id: bulletID}, { headers: headers}).map(res=>res.json());
  }

  addBullet(newBullet){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addBullet', {
      "name": newBullet.name,
      "dateOfCreation": newBullet.dateOfCreation,
      "lastUpdate": newBullet.lastUpdate,
      "color": newBullet.color,
      "content": newBullet.content}
       , { headers: headers}).map(res=>res.json());
  }

  addNewContentToBullet(bulletID:string,newContent:BulletContent){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addNewContentToBullet',{
      "bulletID":bulletID,
      "contentUpdateTime":newContent.updateTime,
      "contentValue":newContent.content
    },{headers: headers}).map(res=>res.json());
  }

  updateTodayContentOfBullet(bulletID:string,newContent:BulletContent){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'updateTodayContentOfBullet',{
      "bulletID":bulletID,
      "contentUpdateTime":newContent.updateTime,
      "contentValue":newContent.content
    },{headers: headers}).map(res=>res.json());
  }

}

export class Bullet{
  private _id:string;
  constructor(
    private _name:string,
    private _dateOfCreation:string,
    private _lastUpdate:string,
    private _color:string,
    private _content:Array<BulletContent>){
    }

    get id(){return this._id;}
    get name(){return this._name;}
    get dateOfCreation(){return this._dateOfCreation;}
    get lastUpdate(){return this._lastUpdate;}
    get color(){return this._color;}
    get content(){return this._content;}

    set color(value:string){this._color=value};
    set name(value:string){this._name=value};
    set id(value:string){this._id=value};

}

export class BulletContent{
  constructor(public _updateTime:Date,public _content:string){}

  get updateTime(){ return this._updateTime;}
  get content(){return this._content};
}
