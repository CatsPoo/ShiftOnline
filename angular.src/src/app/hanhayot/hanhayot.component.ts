import { HanhayotService, Hanhaya } from './../services/hanhayot/hanhayot.service';
import { TimeAndDateService } from './../services/time_and_date/time-and-date.service';
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

    this.hanhayot=this.hanhayotService.getHanhayot();
  }


  ngOnInit() {
  }

  addNew(){
  }

}
