import { Date } from './../services/time_and_date/time-and-date.service';
import { BulletsListComponent } from './../bullets_list/bullets_list.component';
import { Bullet, BulletsService, BulletContent } from './../services/bullets/bullets.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {

  @Input('bulletData') bullet: Bullet;
  @Input('today') today: Date;
  @Output('removeBulletClick') removeBulletClick = new EventEmitter();

  private currentContent = 0;

  private readOnly:boolean=true;
  
  private bulletsService: BulletsService;
  private bulletContentValue:string;

  constructor(bulletsService: BulletsService) {
    this.bulletsService = bulletsService;
    
  }

  ngOnInit() {
    this.currentContent = this.bullet.content.length - 1;
    this.bulletContentValue=this.bullet.content[this.currentContent]._content;
  }

  newerContent() {
    if (this.currentContent < this.bullet.content.length - 1) this.currentContent++;
    this.bulletContentValue=this.bullet.content[this.currentContent]._content;
  }

  olderContent() {
    if (this.currentContent > 0) this.currentContent--;
    this.bulletContentValue=this.bullet.content[this.currentContent]._content;
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

  saveBullet(bullet) {
    var newContent: BulletContent = new BulletContent(this.today, this.bulletContentValue);
    var lastContant: BulletContent = bullet.content[bullet.content.length - 1];
    
    if (this.today.compare(lastContant._updateTime)==1)//newContent.updateTime.compare(lastContant._updateTime) == 1)//the new contant's upsate time is newer then the last update (pass at list one day since the last update)
    {
      //push new content to the object
      this.bulletsService.addNewContentToBullet(bullet.id,newContent).subscribe(res=>{
        this.bullet.content.push(newContent);
      });
    }
    else//the contant updated at the same time as the last update
    {
      //change the last update without create new one
      this.bulletsService.updateTodayContentOfBullet(bullet.id,newContent).subscribe(res=>{
        this.bullet.content[this.bullet.content.length-1]=newContent;
      });
    }

    this.bullet.lastUpdate=newContent.updateTime.toString();

  }

  handleUpdateClick(newName:string){
    
  }

}
