import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertifyService} from './services/alertify.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';
import { MaterialModule } from './material/material.module'
import { HomeComponent } from './home/home.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityAddComponent } from './city-add/city-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CityComponent,
    ValueComponent,
    HomeComponent,
    CityDetailComponent,
    CityAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],

})
export class AppModule { }
