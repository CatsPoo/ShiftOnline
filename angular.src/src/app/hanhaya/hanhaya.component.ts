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
  @Output('removeBulletClick') removeBulletClick = new EventEmitter();

  private currentContent = 0;

  private readOnly:boolean=true;
  
  private bulletsService: HanhayotService;
  private bulletContentValue:string;

  constructor(bulletsService: HanhayotService) {
    this.bulletsService = bulletsService;
    
  }

  ngOnInit() {
    this.currentContent = this.hanhaya.content.length - 1;
    //this.bulletContentValue=this.hanhaya.content[this.currentContent]._content;
  }

  /*removeBullet(bellet) {
    this.bulletsService.removeHanhaya(bellet._id).subscribe(res => {
      console.log(res.msg);
      if (res.succsess) {
        //remove seccess from the db
        this.removeBulletClick.emit(this.hanhaya);
      }
    });
  }*/

  saveBullet(bullet) {
    

  }

}
