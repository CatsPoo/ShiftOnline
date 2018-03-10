import { TimeAndDateService } from './../../services/time_and_date/time-and-date.service';
import { NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalDataService } from '../../services/global-data/global-data.service';

@Component({
  selector: 'app-add-fault-modal',
  templateUrl: './add-fault-modal.component.html',
  styleUrls: ['./add-fault-modal.component.css']
})
export class AddFaultModalComponent {

  private ModalRef: NgbModalRef;

  closeResult: string;
  @Output() OnClick= new EventEmitter();
  

  private base:string="";
  private site:string="";
  private status:string="";
  private startDate:string="";
  private endDate:string="";
  private contact:string="";
  private comments:string="";
  private system:string="";

  private error="";

  private timeAndDateService:TimeAndDateService;
  private globalDataService:GlobalDataService;

  private basesList;
  private sitesList;
  
  constructor(private modalService: NgbModal,timeAndDateService:TimeAndDateService, globalDataService:GlobalDataService) {
    this.timeAndDateService=timeAndDateService;
    this.globalDataService=globalDataService;

    this.globalDataService.getBasesList().subscribe(res => {
      this.basesList=res.bases;    

    });


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
    if (status == 'Add') {
      if(this.base!="")
      {
        this.error="One or more feilds are missing";
        return;
      }
      else {
        this.error="";
        this.OnClick.emit("");
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
