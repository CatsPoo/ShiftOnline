import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TimeAndDateService } from './../../services/time_and_date/time-and-date.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-hanhaya-modal',
  templateUrl: './update-hanhaya-modal.component.html',
  styleUrls: ['./update-hanhaya-modal.component.css']
})
export class UpdateHanhayaModalComponent {

  closeResult: string;
  @Output() OnClick= new EventEmitter();
  private BulletName:string="";

  private error="";

  constructor(private modalService: NgbModal,private timeAndDateService:TimeAndDateService) {}

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
    if (status == 'Add') {
      if(this.BulletName=="")
      {
        this.error="One or more feilds are missing";
        return;
      }
      else {
        this.error="";
        this.OnClick.emit(this.BulletName);
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
