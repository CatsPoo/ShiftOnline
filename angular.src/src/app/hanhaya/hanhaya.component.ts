import { HanhayotService, Hanhaya, CreateHanhayaModalData } from './../services/hanhayot/hanhayot.service';
import { Date, TimeAndDateService } from './../services/time_and_date/time-and-date.service';
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

  private Content:string="";

  private readOnly:boolean=true;
  
  private hanhayotService: HanhayotService;
  private hanhayaContentValue:string;

  constructor(bulletsService: HanhayotService) {
    this.hanhayotService = bulletsService;
    
  }

  ngOnInit() {
    this.Content=this.hanhaya.content;
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

  saveHanhaya(){
    //change the last update without create new one
    this.hanhayotService.updateContent(this.hanhaya.id,this.Content).subscribe(res=>{
      console.log(res.msg);
    }); 
  }

  handleUpdateClick(hanhayaData:CreateHanhayaModalData){
    this.hanhayotService.updateHanhaya(this.hanhaya.id,hanhayaData).subscribe(res=>{
      this.hanhaya.name=hanhayaData.name;
      this.hanhaya.startDate=hanhayaData.startDate.toString();
      this.hanhaya.endDate=hanhayaData.endDate.toString();
    });
  }

}
