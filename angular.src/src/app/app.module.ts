import { BulletsService } from './services/bullets/bullets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BulletsListComponent } from './bullets_list/bullets_list.component';
import { BulletComponent } from './bullet/bullet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonnelComponent } from './personnel/personnel.component';


@NgModule({
  declarations: [
    AppComponent,
    BulletsListComponent,
    BulletComponent,
    NavBarComponent,
    PersonnelComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    BulletsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
