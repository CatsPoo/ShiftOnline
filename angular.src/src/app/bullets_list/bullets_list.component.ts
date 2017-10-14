import { TimeAndDateService,Date } from './../services/time_and_date/time-and-date.service';
import { Component, OnInit, Input } from '@angular/core';
import { BulletsService, Bullet, BulletContent } from './../services/bullets/bullets.service';

@Component({
  selector: 'app-bullets_list',
  templateUrl: './bullets_list.component.html',
  styleUrls: ['./bullets_list.component.css']
})
export class BulletsListComponent implements OnInit {

  private bullets = [];
  private bulletsService: BulletsService;
  private timeAndDateService: TimeAndDateService;
  private today: Date;

  constructor(service: BulletsService, timeAndDateService: TimeAndDateService) {
    this.bulletsService = service;
    this.timeAndDateService = timeAndDateService;

    this.bulletsService.getBullets().subscribe(res => {
      res.bullets.forEach(element => {
        let tempBullet = new Bullet(element.name, element.dateOfCreation, element.lastUpdate, element.color, element.content);
        tempBullet.id = element._id;
        console.log(tempBullet + 'temp');
        this.bullets.push(tempBullet);
      });
    });

    this.timeAndDateService.getCurrentTime().subscribe(res => { //get current time from server
      this.today=new Date(res.year,res.mounth,res.day);

    });
  }

  ngOnInit() {
  }

  addBullet() {

    let newBullet: Bullet = new Bullet('New bullet', this.today.toString(), this.today.toString(), 'green', [new BulletContent(this.today, '')]);//create new bullet with the new data
    this.bulletsService.addBullet(newBullet).subscribe(res => {//push the bullet to the server
      console.log(res.msg);//print the response
      if (res.succsess) {
        newBullet.id = res.id; //get the id from the server
        this.bullets.push(newBullet);
      }
    });

  }

  handleRemoveClick(bullet){
   console.log(bullet);
    let index = this.bullets.indexOf(bullet); //remove bullet from the ui
    this.bullets.splice(index, 1);
  }

  saveBullet(bullet) {
    var newContent:BulletContent = new BulletContent(this.today,'');
    var lastContant:BulletContent =bullet.content[bullet.content.length-1];

    if(newContent.updateTime.compare(lastContant.updateTime)==1)//the new contant's upsate time is newer then the last update (pass at list one day since the last update)
    {
      //push new content to the object
    }
    else//the contant updated at the same time as the last update
    {
      //change the last update without create new one
    }

    this.bulletsService.saveBullet(bullet.id, 'TODO save content');

  }
  saveAllBullets() {
    this.bullets.forEach(element => {
      this.saveBullet(element);
    });
  }

}
