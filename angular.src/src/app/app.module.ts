import {TimeAndDateService } from './services/time_and_date/time-and-date.service';
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
import { HomeComponent } from './home/home.component';
import {HttpModule} from '@angular/http';

const appRoute:Routes=[
  {path:'',component: HomeComponent},
  {path:'bullets-list',component: BulletsListComponent},
  {path:'manpower-strength',component: ManpowerStrengthComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BulletsListComponent,
    BulletComponent,
    NavBarComponent,
    ManpowerStrengthComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule
  ],
  providers: [
    BulletsService,
    TimeAndDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
