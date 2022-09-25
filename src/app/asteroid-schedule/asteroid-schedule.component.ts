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
  comparison;
  damage;
  missDistance;
  approachDate;
  constructor() { }

  ngOnInit(): void {
    console.log(this.asteroid)
    this.averageDiameter = (this.asteroid.estimatedDiameterMin + this.asteroid.estimatedDiameterMax)/2; 
    this.missDistance = Math.round(+this.asteroid.missDistance);
    this.approachDate = this.asteroid.closeApproachDate;
  }

  selectImg() {
    if(this.averageDiameter <= 8.00 && this.averageDiameter > 1.00) {
      this.comparison = 'Mountain'
      this.damage = 'Climate change and extintion event'
      return 'mountain.jpg';
    } else if(this.averageDiameter <= 1.00 && this.averageDiameter > 0.40) {
      this.comparison = 'Skyscraper'
      this.damage = 'Civilization disruption and extintion challenge'
      return 'skyscraper.jpg';
    } else if(this.averageDiameter <= 0.40 && this.averageDiameter > 0.300) {
      this.comparison = 'ICE train'
      this.damage = 'Civilization threat'
      return 'ice.jpg';
    } else if (this.averageDiameter <= 0.300 && this.averageDiameter > 0.150 ){
      this.comparison = 'Ship'
      this.damage = 'State killer'
      return 'ship.jpg';
    } else if(this.averageDiameter <= 0.150 && this.averageDiameter > 0.100) {
      this.comparison = 'Football field'
      this.damage = 'Region killer'
      return 'footballfield.jpg';
    } else if(this.averageDiameter <= 0.100 && this.averageDiameter > 0.050) {
      this.comparison = 'Big monument'
      this.damage = 'City killer'
      return 'monument.jpg';
    } else if(this.averageDiameter <= 0.050 && this.averageDiameter > 0.025) {
      this.comparison = 'Swimming pool'
      this.damage = 'Town killer'
      return 'pool.jpg';
    } else if(this.averageDiameter <= 0.025 && this.averageDiameter > 0.018) {
      this.comparison = 'Tree'
      this.damage = 'Window breaker'
      return 'tree.jpg';
    } else if(this.averageDiameter <= 0.018 && this.averageDiameter > 0.012) {
      this.comparison = 'Bus'
      this.damage = 'Window breaker'
      return 'bus.jpg';
    } else if(this.averageDiameter <= 0.012 && this.averageDiameter > 0.006) {
      this.comparison = 'Ship container'
      this.damage = 'no damage but notable'
      return 'container.jpg';
    } else if(this.averageDiameter <= 0.006 && this.averageDiameter > 0.003) {
      this.comparison = 'Car'
      this.damage = 'trivial not notable'
      return 'car.jpg';
    } else if(this.averageDiameter <= 0.003 && this.averageDiameter > 0.002) {
      this.comparison = 'Couch'
      this.damage = 'trivial not notable'
      return 'couch.jpg';
    } else {
      return console.log('not set measure');
    }
     
    
  }

}
