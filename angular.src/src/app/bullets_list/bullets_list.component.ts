import { Component, OnInit } from '@angular/core';
import {BulletsService, Bullet, BulletContent} from './../services/bullets/bullets.service';

@Component({
  selector: 'app-bullets_list',
  templateUrl: './bullets_list.component.html',
  styleUrls: ['./bullets_list.component.css']
})
export class BulletsListComponent implements OnInit {

  private bullets;
  constructor(service: BulletsService) { 
    this.bullets=service.getBullets();
  }

  ngOnInit() {
  }

  addBullet()
  {
    this.bullets.push(new Bullet(this.bullets.length,'New bulet','4/4/4444','6/6/6666','green',[new BulletContent('','')]));
  }

  removeBullet(node){
    let index=this.bullets.indexOf(node);
    this.bullets.splice(index, 1);
  }

  saveAllBullets(){
    
  }

}
