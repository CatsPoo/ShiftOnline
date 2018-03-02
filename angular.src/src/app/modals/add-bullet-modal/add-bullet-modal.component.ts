import { TimeAndDateService } from './../../services/time_and_date/time-and-date.service';
import { NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-bullet-modal',
  templateUrl: './add-bullet-modal.component.html',
  styleUrls: ['./add-bullet-modal.component.css']
})
export class AddBulletModalComponent {
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
