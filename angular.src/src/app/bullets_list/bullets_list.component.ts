import { Component, OnInit } from '@angular/core';
import {BulletsService, Bullet, BulletContent} from './../services/bullets/bullets.service';

@Component({
  selector: 'app-bullets_list',
  templateUrl: './bullets_list.component.html',
  styleUrls: ['./bullets_list.component.css']
})
export class BulletsListComponent implements OnInit {

  private bullets;
  private service:BulletsService;

  constructor(service: BulletsService) {
    this.service=service; 
    this.bullets=this.service.getBullets();
  }

  ngOnInit() {
  }

  addBullet()
  {
    let newBullet:Bullet=new Bullet(this.bullets.length,'New bulet','4/4/4444','6/6/6666','green',[new BulletContent('','')]);
    this.bullets.push(newBullet);
    this.service.addBullet(newBullet);
  }

  removeBullet(node){
    let index=this.bullets.indexOf(node);
    this.bullets.splice(index, 1);
    this.service.removeBullet(node.id);
  }

  saveBullet(bullet){
    this.service.saveBullet(bullet.id,bullet.BulletContent);
    this.service.saveBullet(bullet.id,'TODO get bellet content');
  }
  saveAllBullets(){
    this.bullets.forEach(element => {
      this.saveBullet(element);
    });
  }

}
