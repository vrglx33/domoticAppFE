import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UpdateLocationService} from '../services/services';

import { Home } from '../home';

@Component({
  selector: 'app-home-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private uls: UpdateLocationService) { }
  @Input() coordinates: any;
  submitted = false;
  savedId: any = {};
  model = new Home('', '', '', '', '');
  onSubmit() {
    this.submitted = true;
    this.model.longitude = this.coordinates.lng;
    this.model.latitude = this.coordinates.lat;
    this.uls.createHome(this.model).subscribe((response) => {
      this.submitted = true;
      this.savedId = response;
    }, (error) => {
      this.submitted = false;
    } );
  }
}
