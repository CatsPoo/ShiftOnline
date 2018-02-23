import { HanhayotService, Hanhaya } from './../services/hanhayot/hanhayot.service';
import { TimeAndDateService, Date } from './../services/time_and_date/time-and-date.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hanhayot',
  templateUrl: './hanhayot.component.html',
  styleUrls: ['./hanhayot.component.css']
})
export class HanhayotComponent implements OnInit {

  private hanhayot = [];
  private hanhayotService: HanhayotService
  private timeAndDateService: TimeAndDateService;
  private today: Date;
  

  constructor(service: HanhayotService, timeAndDateService: TimeAndDateService) {
    this.hanhayotService = service;
    this.timeAndDateService = timeAndDateService;

    this.hanhayotService.getHanhayot().subscribe(res => {
      res.hanhayot.forEach(element => {
        let tempHanhaya = new Hanhaya(element._name,new Date(1,1,1), new Date(2,3,2),element._content);
        tempHanhaya.id = element._id;
        this.hanhayot.push(tempHanhaya);
      });
    });
  }


  ngOnInit() {
  }

  addNew(){
  }

}
