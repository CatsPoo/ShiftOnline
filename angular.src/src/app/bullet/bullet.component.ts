import { BulletsListComponent } from './../bullets_list/bullets_list.component';
import { Bullet, BulletsService, BulletContent } from './../services/bullets/bullets.service';
import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {
  
  @Input('bulletData') bullet:Bullet;
  @Output('removeBulletClick') removeBulletClick=new EventEmitter();

  private currentContent=0;
  private bulletsService: BulletsService;

  constructor(bulletsService:BulletsService) {
    this.bulletsService=bulletsService;
   }

  ngOnInit() {
    this.currentContent= this.bullet.content.length-1;

    console.log(this.bullet.content);
  }

  newerContent(){
    if(this.currentContent<this.bullet.content.length-1) this.currentContent++;
  }

  olderContent(){
    if(this.currentContent>0) this.currentContent--;
  }

  removeBullet(bellet) {
    this.bulletsService.removeBullet(bellet._id).subscribe(res => {
      console.log(res.msg);
      if (res.succsess) {
        //remove seccess from the db
        this.removeBulletClick.emit(this.bullet);
      }
    });
  }

}
