import {Component, OnInit} from '@angular/core';
import {UpdateLocationService} from './services/services';

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
  user:any;
  sensorCreator: boolean = false;

  constructor(private uls: UpdateLocationService) { }
  ngOnInit() {
    this.user = localStorage.getItem('login');
    this.uls
      .getHomes()
      .subscribe((data) => {
            this.homes = data;
        }
      );
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

}
