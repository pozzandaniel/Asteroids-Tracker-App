import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsPatternService {

  asteroid = {
    closeApproachDate: '',
    missDistance:  0,
    estimatedDiameterMin:  0,
    estimatedDiameterMax:  0,
    potentiallyHazardousAst:  false,
    orbitingBody:  '',
    nameAsteroid:  ''
  }

  asteroids: [] = [];



  constructor() {
      
  }

 
}
