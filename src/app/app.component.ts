import { Home } from './home';
import {Component, OnInit} from '@angular/core';
import {UpdateLocationService} from './services/services';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DomoticApp';
  coordinates: any = {
    lat: '',
    lng: '',
  };
  homes: any = [];
  user: any;
  sensorCreator: boolean = false;
  router: Router;
  constructor(private uls: UpdateLocationService, router: Router) {  }
  ngOnInit() {
    this.user = localStorage.getItem('login');
    this.uls
      .getHomes()
      .subscribe((data) => {
            this.homes = data;
        }
      );
    setInterval(()=>{this.uls
      .getHomes()
      .subscribe((data) => {
            this.homes = data;
            this.homes.forEach(element => {
              element.sensors.forEach(sensor => {
                if (sensor.status) {
                  alert(sensor.name + " ha sido activado")
                }
              });
            });
        }
      );})
  }

  mapClicked($event: MouseEvent) {
    this.homes.push({
      // @ts-ignore
      latitude: $event.coords.lat,
      // @ts-ignore
      longitude: $event.coords.lng,
      draggable: true,
    });
    // @ts-ignore
    this.coordinates = $event.coords;
  }
  markerDragEnd(m, $event) {
    this.coordinates = $event.coords;
  }
  logout() {
    localStorage.clear();
    this.user = undefined;
    this.router.navigate(['/login']);
  }
  rentIt(home: Home, $event) {
    home.rent = true;
    this.uls.updateHome(home).subscribe((response) => {
      alert('Has Rentado esta casa!');
  });
  }
}
