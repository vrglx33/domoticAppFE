import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import {Home} from "../home";
import {Sensor} from "../sensor";

@Injectable({
  providedIn: 'root'
})
export class UpdateLocationService {
  endpoint = {
    homes: '',
    saveHome: '',
    sensors: '',
  } ;
  constructor(private http: Http) {
    this.endpoint.homes = `${environment.apiUrl}/api/homes`;
    this.endpoint.sensors = `${environment.apiUrl}/api/sensors`;
    this.endpoint.saveHome = `${environment.apiUrl}/api/homes`;
  }
  getHomes(): Observable<any> {
    return this.http
      .get(this.endpoint.homes).pipe(map(res => <any>res.json()));
  }
  getSensorsByHome(): Observable<any> {
    return this.http
      .get(this.endpoint.sensors).pipe(map(res => <any>res.json()));
  }
  createHome(home: Home): Observable<any>{
    return this.http
      .post(this.endpoint.saveHome, home).pipe(map(res => <any>res.json()));
  }
  createSensor(sensor: Sensor): Observable<any>{
    return this.http
      .post(this.endpoint.sensors, sensor).pipe(map(res => <any>res.json()));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
