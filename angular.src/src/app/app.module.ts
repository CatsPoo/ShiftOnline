import { NgModule, Component} from '@angular/core';

//Components
import { HanhayaComponent } from './hanhaya/hanhaya.component';
import { AppComponent } from './app.component';
import { BulletsListComponent } from './bullets_list/bullets_list.component';
import { HanhayotComponent } from './hanhayot/hanhayot.component';
import { FaultsComponent } from './faults/faults.component';
import { BulletComponent } from './bullet/bullet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManpowerStrengthComponent } from './manpower-strength/manpower-strength.component';

//Sevices
import { HanhayotService } from './services/hanhayot/hanhayot.service';
import { FaultService } from './services/fault/fault.service';
import {TimeAndDateService } from './services/time_and_date/time-and-date.service';
import { BulletsService } from './services/bullets/bullets.service';

//modals

//Modules
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';




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
    HanhayaComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [
    BulletsService,
    TimeAndDateService,
    FaultService,
    HanhayotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
