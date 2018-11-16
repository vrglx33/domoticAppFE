import {Component, Input, OnInit} from '@angular/core';

import { Sensor } from '../sensor';
import {UpdateLocationService} from '../services/services';
import {Home} from '../home';

@Component({
  selector: 'app-sensor-house-form',
  templateUrl: './sensorHouseForm.component.html',
  styleUrls: ['./sensorHouseForm.component.css']
})

export class SensorHouseFormComponent implements OnInit {
  constructor(private uls: UpdateLocationService) { }
  @Input() savedId: any;
  submitted = false;
  numberOfSensors = 1;
  sensors = Array(this.numberOfSensors);
  model = new Sensor('', '', '', false, new Home('', '', '', '', '', false, ''));
  homes: any;

  ngOnInit() {
    this.uls
      .getHomes()
      .subscribe((data) => {
          this.homes = data;
        }
      );
  }
  onSubmit() {
    this.submitted = true;
    const filtered = this.homes.filter((hm) => this.model.homeId === hm.id.toString());
    this.model.home = filtered[0];
    delete this.model.homeId;
    this.uls.createSensor(this.model).subscribe((response) => {
      this.submitted = true;
    }, (error) => {
      this.submitted = false;
    } );
  }

}
