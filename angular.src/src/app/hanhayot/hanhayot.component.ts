import { AddHanhayaModalComponent } from './../modals/add-hanhaya-modal/add-hanhaya-modal.component';
import { OnInit, Component } from '@angular/core';
import { HanhayotService, Hanhaya, CreateHanhayaModalData } from './../services/hanhayot/hanhayot.service';
import { TimeAndDateService, Date } from './../services/time_and_date/time-and-date.service';


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

    this.hanhayotService.getHanhayot().subscribe(res => {
      res.hanhayot.forEach(element => {
        let tempHanhaya = new Hanhaya(element.name,element.startDate,element.endDate,element.content);
        tempHanhaya.id = element._id;
        this.hanhayot.push(tempHanhaya);
      });
    });
  }

  onAddClicked(result:CreateHanhayaModalData){
    let tempHanhaya:Hanhaya=new Hanhaya(result.name,result.startDate.toString(),result.endDate.toString(),"");
    //this.hanhayot.push(tempHanhaya);
    this.hanhayotService.addHanhayot(tempHanhaya).subscribe(res => {//push the hanhaya to the server
      console.log(res.msg);//print the response
      if (res.succsess) {
        tempHanhaya.id = res.id; //get the id from the server
        this.hanhayot.push(tempHanhaya);
      }
    });
  }
  handleRemoveClick(hanhaya:Hanhaya){
    this.hanhayot.splice(this.hanhayot.indexOf(hanhaya),1);
  }


  ngOnInit() {
  }

  addNew(){
  }

}
