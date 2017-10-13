import { TimeAndDateService } from './../services/time_and_date/time-and-date.service';
import { Component, OnInit } from '@angular/core';
import {BulletsService, Bullet, BulletContent} from './../services/bullets/bullets.service';

@Component({
  selector: 'app-bullets_list',
  templateUrl: './bullets_list.component.html',
  styleUrls: ['./bullets_list.component.css']
})
export class BulletsListComponent implements OnInit {

  private bullets;
  private bulletsService:BulletsService;
  private timeAndDateService:TimeAndDateService;

  constructor(service: BulletsService,timeAndDateService:TimeAndDateService) { 
    this.bullets=service.getBullets();
    this.bulletsService=service;
    this.timeAndDateService=timeAndDateService;
  }

  ngOnInit() {
  }

  addBullet()
  {
    this.timeAndDateService.getCurrentTime().subscribe(res=>{
      let date:string=res.day+'/'+res.mounth+'/'+res.year;
      let newBullet:Bullet=new Bullet(this.bullets.length,'New bullet',date,'6/6/6666','green',[new BulletContent('','')]);
      this.bullets.push(newBullet);
      this.bulletsService.addBullet(newBullet);
    });
  
  }

  removeBullet(node){
    let index=this.bullets.indexOf(node);
    this.bullets.splice(index, 1);
    this.bulletsService.removeBullet(node);
  }
  saveBullet(bullet){
    this.bulletsService.saveBullet(bullet.id,'TODO getnew content');
  }
  saveAllBullets(){
    this.bullets.forEach(element => {
        this.saveBullet(element);      
    });
  }

}
