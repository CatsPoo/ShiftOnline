import { HanhayotService, Hanhaya } from './../services/hanhayot/hanhayot.service';
import { Date } from './../services/time_and_date/time-and-date.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hanhaya',
  templateUrl: './hanhaya.component.html',
  styleUrls: ['./hanhaya.component.css']
})
export class HanhayaComponent implements OnInit {

  @Input('data') hanhaya: Hanhaya;
  @Input('today') today: Date;
  @Output('removeHanhayaClick') removeHanhayaClick = new EventEmitter();

  private currentContent = 0;

  private readOnly:boolean=true;
  
  private hanhayotService: HanhayotService;
  private hanhayaContentValue:string;

  constructor(bulletsService: HanhayotService) {
    this.hanhayotService = bulletsService;
    
  }

  ngOnInit() {
    this.currentContent = this.hanhaya.content.length - 1;
    this.hanhayaContentValue=this.hanhaya.content;
  }

  removeHanhaya(hanhaya) {
    this.hanhayotService.removeHanhayot(hanhaya._id).subscribe(res => {
      console.log(res.msg);
      if (res.succsess) {
        //remove seccess from the db
        this.removeHanhayaClick.emit(this.hanhaya);
      }
    });
  }

  saveBullet(bullet) {
    

  }

}
