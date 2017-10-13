import { TimeAndDateService,Date } from './../services/time_and_date/time-and-date.service';
import { Component, OnInit } from '@angular/core';
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

    let newBullet: Bullet = new Bullet('New bullet', this.today.toString(), this.today.toString(), 'green', [new BulletContent(this.today.toString(), '')]);//create new bullet with the new data
    this.bulletsService.addBullet(newBullet).subscribe(res => {//push the bullet to the server
      console.log(res.msg);//print the response
      if (res.succsess) {
        newBullet.id = res.id; //get the id from the server
        this.bullets.push(newBullet);
      }
    });

  }

  removeBullet(node) {
    this.bulletsService.removeBullet(node._id).subscribe(res => {
      console.log(res.msg);
      if (res.succsess) {
        //remove seccess from the db
        let index = this.bullets.indexOf(node);
        this.bullets.splice(index, 1);
        this.bulletsService.removeBullet(node);
      }
    });


  }
  saveBullet(bullet) {
    this.bulletsService.saveBullet(bullet.id, 'TODO save content');
    var content = new BulletContent(this.today.toString(),'');

  }
  saveAllBullets() {
    this.bullets.forEach(element => {
      this.saveBullet(element);
    });
  }

}
