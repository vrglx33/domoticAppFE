import {Home} from './home';

export class Sensor {
  homeId: string;

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public status: boolean,
    public home: Home,
  ) {  }

}
