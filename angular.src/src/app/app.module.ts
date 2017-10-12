import { BulletsService } from './services/bullets/bullets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BulletsListComponent } from './bullets_list/bullets_list.component';
import { BulletComponent } from './bullet/bullet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManpowerStrengthComponent } from './manpower-strength/manpower-strength.component';

const appRoute:Routes=[
 // {path:'',component: AppComponent},
  {path:'bullets-list',component: BulletsListComponent},
  {path:'manpower-strength',component: ManpowerStrengthComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BulletsListComponent,
    BulletComponent,
    NavBarComponent,
    ManpowerStrengthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [
    BulletsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
