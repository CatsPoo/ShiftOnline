import { TimeAndDateService } from './../time_and_date/time-and-date.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BulletsService {
  private timeService: TimeAndDateService;

  constructor(timeService) {
    this.timeService=timeService;
   }

  getBullets() {
    return [
       new Bullet(0,'first','1/1/2000','2/2/2222','green',[new BulletContent('1/2/2007','sdsdsds'),new BulletContent('1/1/2017','dddddd')]),
       //new Bullet(1,'second','2/2/1111','3/2/2222','red',[new BulletContent('','')]),
    ];
  }
  addBullet(bullet){ //add new bullet to db
    console.log('TODO add bullet to DB'); 
  }

  removeBullet(id){ //remove bullet from db
    console.log('Remove bullet: '+id+' from DB');
  }
  saveBullet(id,newContant){ //add new content to DB
    console.log('TODO save bullet number: '+id+"to DB");
    //this.timeService.getCurrentTime();
  }

  editBulletName(id,newName){ //change bullet name ob db
    console.log('TODO save the new name: '+newName+' to DB')
  }

}

export class Bullet{
  constructor(
    private _id:number,
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

}

export class BulletContent{
  constructor(private _updateTime:string,private _content:string){}

  get updateTime() {return this._updateTime;}
  get content(){return this._content};
}
