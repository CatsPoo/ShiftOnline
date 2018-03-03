import { Hanhaya, CreateHanhayaModalData } from './../../services/hanhayot/hanhayot.service';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TimeAndDateService } from './../../services/time_and_date/time-and-date.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-update-hanhaya-modal',
  templateUrl: './update-hanhaya-modal.component.html',
  styleUrls: ['./update-hanhaya-modal.component.css']
})
export class UpdateHanhayaModalComponent implements OnInit{

  closeResult: string;
  @Output() OnClick= new EventEmitter<CreateHanhayaModalData>();
  @Input('hanhayaData') hanhaya:Hanhaya;

  private HanhayaName:string="";
  private HanhayaStartDate:string="";
  private HanhayaEndDate:string="";

  private error="";

  constructor(private modalService: NgbModal,private timeAndDateService:TimeAndDateService) {}

  private ModalRef: NgbModalRef;
  
  ngOnInit(){
    this.HanhayaName=this.hanhaya.name;
    this.HanhayaStartDate=this.hanhaya.startDate;
    this.HanhayaEndDate=this.hanhaya.endDate;
  }
  open(content) {
    this.ModalRef=this.modalService.open(content);
    this.ModalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  Click(status: string) {
    if (status == 'Update') {
      if(this.HanhayaName==""||this.HanhayaStartDate==""||this.HanhayaEndDate=="")
      {
        this.error="אחד או יותר מהשדות חסרים";
        return;
      }
      else if(!this.timeAndDateService.isAvailableDate(this.HanhayaStartDate)||!this.timeAndDateService.isAvailableDate(this.HanhayaEndDate))
      {
        this.error="תאריך אינו תקין";
        return;
      }
      else {
        this.error="";
        let startDate=this.timeAndDateService.convertStringToDate(this.HanhayaStartDate);
        let endDate=this.timeAndDateService.convertStringToDate(this.HanhayaEndDate);
        let temp:CreateHanhayaModalData=new CreateHanhayaModalData(this.HanhayaName,startDate,endDate);
        this.OnClick.emit(temp);
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