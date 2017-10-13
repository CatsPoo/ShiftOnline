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
    this.timeAndDateService.getCurrentTime().subscribe(res=>{ //get current time from server

      let date:string=res.day+'/'+res.mounth+'/'+res.year;//create new date sring from the response values
      let newBullet:Bullet=new Bullet('New bullet',date,date,'green',[new BulletContent(date,'')]);//create new bullet with the new data
      this.bulletsService.addBullet(newBullet).subscribe(res=>{//push the bullet to the server
        console.log(res.msg);//print the response
        if(res.succsess){
          newBullet.id=res.id;
          this.bullets.push(newBullet);
          console.log(newBullet);
        }
      });
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
