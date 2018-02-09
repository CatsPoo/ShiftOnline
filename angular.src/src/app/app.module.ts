import {TimeAndDateService } from './services/time_and_date/time-and-date.service';
import { BulletsService } from './services/bullets/bullets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BulletsListComponent } from './bullets_list/bullets_list.component';
import { BulletComponent } from './bullet/bullet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManpowerStrengthComponent } from './manpower-strength/manpower-strength.component';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HanhayotComponent } from './hanhayot/hanhayot.component';
import { FaultsComponent } from './faults/faults.component';
import { DataTablesModule } from 'angular-datatables';


const appRoute:Routes=[
  {path:'',component: ManpowerStrengthComponent},
  {path:'events-list',component: BulletsListComponent},
  {path:'hanhayot',component: HanhayotComponent},
  {path:'faults',component: FaultsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BulletsListComponent,
    BulletComponent,
    NavBarComponent,
    ManpowerStrengthComponent,
    HanhayotComponent,
    FaultsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    BulletsService,
    TimeAndDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
