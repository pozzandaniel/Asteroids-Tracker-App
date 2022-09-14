import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsPatternService {

  asteroid = {
    closeApproachDate: '',
    missDistance:  '',
    estimatedDiameterMin:  0,
    estimatedDiameterMax:  0,
    potentiallyHazardousAst:  false,
    orbitingBody:  '',
    nameAsteroid:  ''
  }

  asteroids: any[] = [];



  constructor() {
      
  }

  updateAsteroidInfos(date:string, dist:string, minD:number, maxD:number, hazard:boolean, orbitB:string, name:string) {
    this.asteroid.closeApproachDate = date;
    this.asteroid.missDistance = dist;
    this.asteroid.estimatedDiameterMin = minD;
    this.asteroid.estimatedDiameterMax = maxD;
    this.asteroid.potentiallyHazardousAst = hazard;
    this.asteroid.orbitingBody = orbitB;
    this.asteroid.nameAsteroid = name;

    this.asteroids.push(this.asteroid);

    
  }

  
 
}
