import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

class Person{
  constructor(private id:number, private first:string,private last:string){}
}

@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css']
})
export class FaultsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  //dtTrigger: Subject<any> = new Subject(); 
  
  constructor() { }
  

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15
    };
    for(var i=0;i<100;i++)
    {
      this.persons[i]=new Person(i,"aaa","bbb");
    }

    //this.dtTrigger.next();
  }

}
