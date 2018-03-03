import { Date, TimeAndDateService } from './../../services/time_and_date/time-and-date.service';
import { CreateHanhayaModalData } from './../../services/hanhayot/hanhayot.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-hanhaya-modal',
  templateUrl: './add-hanhaya-modal.component.html',
  styleUrls: ['./add-hanhaya-modal.component.css']
})
export class AddHanhayaModalComponent{

  closeResult: string;
  @Output() OnClick= new EventEmitter<CreateHanhayaModalData>();
  private hanhayaName:string="";
  private endDateStr:string="";
  private startDateStr:string="";

  private error="";

  constructor(private modalService: NgbModal,private timeAndDateService:TimeAndDateService) {}
  private createHanhayaModalData:CreateHanhayaModalData;
  private hanhayaStartDate:Date
  private hanhayaEndDate:Date;

  private ModalRef: NgbModalRef;
  
  open(content) {
    this.ModalRef=this.modalService.open(content);
    this.ModalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  Click(status: string) {
    console.log(this.endDateStr);
    if (status == 'Add') {
      if(this.startDateStr==""||this.endDateStr=="")
      {
        this.error="אחד או יותר מהשדות חסרים";
        return;
      }
      else if(!this.timeAndDateService.isAvailableDate(this.startDateStr)||!this.timeAndDateService.isAvailableDate(this.endDateStr))
      {
        this.error="תאריך אינו תקין";
        return;
      }
      else {
        this.error="";
        let endDate = this.timeAndDateService.convertStringToDate(this.endDateStr);
        let startDate = this.timeAndDateService.convertStringToDate(this.startDateStr)
        let result: CreateHanhayaModalData = new CreateHanhayaModalData(this.hanhayaName, startDate, endDate);
        this.OnClick.emit(result);
        this.hanhayaName="";
        this.startDateStr="";
        this.endDateStr="";
      }
    }
    this.ModalRef.close();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}