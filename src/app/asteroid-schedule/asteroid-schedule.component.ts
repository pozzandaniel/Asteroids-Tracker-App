import { Component, OnInit } from '@angular/core';
import { Asteroid } from '../asteroids-pattern.service';

@Component({
  selector: 'app-asteroid-schedule',
  templateUrl: './asteroid-schedule.component.html',
  styleUrls: ['./asteroid-schedule.component.scss']
})
export class AsteroidScheduleComponent implements OnInit {
  asteroid: Asteroid;
  averageDiameter; 
  constructor() { }

  ngOnInit(): void {
    console.log(this.asteroid)
    this.averageDiameter = (this.asteroid.estimatedDiameterMin + this.asteroid.estimatedDiameterMax)/2; 
  }

  selectImg() {
    if(this.averageDiameter <= 8.00 && this.averageDiameter > 1.00) {
      return 'mountain.png';
    } else if(this.averageDiameter <= 1.00 && this.averageDiameter > 0.40) {
      return 'skyscraper.png';
    } else if(this.averageDiameter <= 0.40 && this.averageDiameter > 0.150) {
      return 'ice.png';
    } else if(this.averageDiameter <= 0.150 && this.averageDiameter > 0.100) {
      return 'footballfield.png';
    } else if(this.averageDiameter <= 0.100 && this.averageDiameter > 0.050) {
      return 'monument.png';
    } else if(this.averageDiameter <= 0.050 && this.averageDiameter > 0.025) {
      return 'swimmingpool.png';
    } else if(this.averageDiameter <= 0.025 && this.averageDiameter > 0.018) {
      return 'pine.png';
    } else if(this.averageDiameter <= 0.018 && this.averageDiameter > 0.012) {
      return 'bus.png';
    } else if(this.averageDiameter <= 0.012 && this.averageDiameter > 0.006) {
      return 'container.png';
    } else if(this.averageDiameter <= 0.006 && this.averageDiameter > 0.003) {
      return 'car.png';
    } else if(this.averageDiameter <= 0.003 && this.averageDiameter > 0.002) {
      return 'couch.png';
    } else {
      return console.log('not set measure');
    }
     
    
  }

}
