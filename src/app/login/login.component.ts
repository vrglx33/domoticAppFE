import {Component, OnInit} from '@angular/core';
import {UpdateLocationService} from '../services/services';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {

  constructor(private uls: UpdateLocationService) { }
  model: any = {
    uname: '',
    psw: '',
  };
  login() {
    localStorage.setItem('login', this.model.uname);
    window.location.reload();
  }
}
