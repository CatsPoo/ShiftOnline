import { FaultService,Fault } from './../services/fault/fault.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { Date } from '../services/time_and_date/time-and-date.service';


@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css']
})

export class FaultsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  //dtTrigger: Subject<any> = new Subject(); 
  
  constructor(private faultService:FaultService) { }
  
  private _faulstList:Fault[]=[];

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15
    };
     this._faulstList=this.faultService.getFaults();

  }

}
