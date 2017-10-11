import { BulletsListComponent } from './../bullets_list/bullets_list.component';
import { Bullet } from './../services/bullets/bullets.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {
  
  @Input('bulletData') bullet:Bullet;
  private currentContent;
  constructor() {
   }

  ngOnInit() {
    console.log(this.bullet);
    this.currentContent= this.bullet.content.length-1;
  }

  newerContent(){
    if(this.currentContent<this.bullet.content.length-1) this.currentContent++;
  }

  olderContent(){
    if(this.currentContent>0) this.currentContent--;
  }

}
