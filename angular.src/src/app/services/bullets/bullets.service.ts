import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BulletsService {
  private http:Http;
  private url:String='http://localhost:3000/bullets/';

  constructor(http:Http) {
    this.http=http;
   }

  getBullets() {
    return [
       new Bullet('first','1/1/2000','2/2/2222','green',[new BulletContent('1/2/2007','sdsdsds'),new BulletContent('1/1/2017','dddddd')]),
       //new Bullet(1,'second','2/2/1111','3/2/2222','red',[new BulletContent('','')]),
    ];
  }

  saveBullet(bulletId,newContent){
      console.log('TODO save new content of module on DB');
  }

  removeBullet(bulletID){
      console.log('TOTO remove bullet frm DB');
  }

  addBullet(newBullet){
    console.log('TODO add bullet to DB');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addBullet', {
      "name": newBullet.name,
      "dateOfCreate": "\""+newBullet.dateOfCreate+"\"",
      "lastUpdate": newBullet.lastUpdate,
      "color": newBullet.color,
      "content": newBullet.content}
       , { headers: headers}).map(res=>res.json());
  }

}

export class Bullet{
  private _id:string;
  constructor(
    private _name:string,
    private _dateOfCreation:string,
    private _lastUpdate:string,
    private _color:string,
    private _content:Array<BulletContent>){}

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
  constructor(private _updateTime:string,private _content:string){}

  get updateTime() {return this._updateTime;}
  get content(){return this._content};
}
