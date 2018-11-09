import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import {HttpModule} from '@angular/http';
import { FormComponent } from './form/form.component';
import {SensorFormComponent} from './sensorForm/sensorForm.component';
import {LoginComponent} from "./login/login.component";
import {SensorHouseFormComponent} from "./sensorhouseform/sensorHouseForm.component";
import { ImageUploadModule } from "angular2-image-upload";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgf8YhUNJstXTQhxJVHHDQ6J2sqWstumI'
    }),
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  declarations: [
    SensorHouseFormComponent,
    LoginComponent,
    FormComponent,
    SensorFormComponent,
    AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
