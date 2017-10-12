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
  constructor(service: BulletsService) { 
    this.bullets=service.getBullets();
    this.bulletsService=service;
  }

  ngOnInit() {
  }

  addBullet()
  {
    let newBullet:Bullet=new Bullet(this.bullets.length,'New bullet','4/4/4444','6/6/6666','green',[new BulletContent('','')]);
    this.bullets.push(newBullet);
    this.bulletsService.addBullet(newBullet);
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
