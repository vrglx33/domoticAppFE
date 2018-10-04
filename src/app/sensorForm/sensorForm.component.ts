import {Component, Input} from '@angular/core';

import { Sensor } from '../sensor';
import {UpdateLocationService} from "../services/services";
import {Home} from "../home";

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensorForm.component.html',
  styleUrls: ['./sensorForm.component.css']
})
export class SensorFormComponent {
  constructor(private uls: UpdateLocationService) { }
  @Input() savedId: any;
  submitted = false;
  numberOfSensors = 1;
  sensors = Array(this.numberOfSensors);
  model = new Sensor('', '', '', false, this.savedId);
  onSubmit() {
    this.submitted = true;
    this.model.home = this.savedId;
    this.uls.createSensor(this.model).subscribe((response) => {
      this.submitted = true;
    }, (error) => {
      this.submitted = false;
    } );
  }

}
