import { TimeAndDateService,Date } from './../time_and_date/time-and-date.service';
import { Injectable } from '@angular/core';
@Injectable()
export class FaultService { //this service used to get, update and delete faults

  constructor() { }

  getFaults(){
    let list:Fault[]=[]; //for testing generate static 10 faultes
    for(var i=1;i<6;i++)
    {
      list.push( new Fault(i,4,101,false,new Date(2018,2,14),new Date(2018,2,14),"רון","בדיקה"));
    }
    for(var i=6;i<11;i++)
    {
      list.push( new Fault(i,6,69,true,new Date(2018,2,20),new Date(2018,2,20),"דני","בדיקה"));
    }
    return list;
  }

}

export class Fault{
  //this class describe how fault neet to seems
  constructor(
    private _id:number,
    private _base:number,
    private _site:number,
    private _state:boolean, //אם התקלה משביתה או מורידה בשרידות  TRUE=משבית   FALSE=שרידות
    private _startTime:Date,
    private _endTime:Date,
    private _contact:string,
    private _remarks:string){}

    get id(){return this._id;}
    get base(){return this._base;}
    get site(){return this._site;}
    get state(){return this._state;}
    get startTime(){return this._startTime;}
    get endTime(){return this._endTime;}
    get contact(){return this._contact;}
    get remarks(){return this._remarks;}
}

class Base { //class for base include the number of the base and its name and sites. for example base 6 Hatzerim 
  constructor(
    private _id: number,
    private _name: string,
    private _sites: string[]) { }

    get id(){return this._id;}
    get name(){return this._name;}
    get sites(){return this._sites;}
}


