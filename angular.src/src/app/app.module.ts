import { GlobalDataService } from './services/global-data/global-data.service';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AddHanhayaModalComponent } from './modals/add-hanhaya-modal/add-hanhaya-modal.component';
import { AddBulletModalComponent } from './modals/add-bullet-modal/add-bullet-modal.component';
import { UpdateBulletModalComponent } from './modals/update-bullet-modal/update-bullet-modal.component';
import { UpdateHanhayaModalComponent } from './modals/update-hanhaya-modal/update-hanhaya-modal.component';
import { AddFaultModalComponent } from './modals/add-fault-modal/add-fault-modal.component';





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
    AddHanhayaModalComponent,
    AddBulletModalComponent,
    UpdateBulletModalComponent,
    UpdateHanhayaModalComponent,
    AddFaultModalComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule,
    FormsModule,
    DataTablesModule,
    NgbModule.forRoot(),
  ],
  providers: [
    BulletsService,
    TimeAndDateService,
    FaultService,
    HanhayotService,
    GlobalDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

