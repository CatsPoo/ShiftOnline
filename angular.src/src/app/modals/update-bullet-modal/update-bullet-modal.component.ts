import { Bullet } from './../../services/bullets/bullets.service';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TimeAndDateService } from './../../services/time_and_date/time-and-date.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-update-bullet-modal',
  templateUrl: './update-bullet-modal.component.html',
  styleUrls: ['./update-bullet-modal.component.css']
})
export class UpdateBulletModalComponent implements OnInit{ 

  closeResult: string;
  @Input('bulletData') bullet;
  @Output() OnClick= new EventEmitter<string>();
  private BulletName:string="";

  private error="";

  constructor(private modalService: NgbModal,private timeAndDateService:TimeAndDateService) {
  }

  ngOnInit(){
        this.BulletName=this.bullet.name;
    //console.log(this.bullet);
  }

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
    if (status == 'Update') {
      if(this.BulletName=="")
      {
        this.error="השם לא יכול להיות ריק";
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
