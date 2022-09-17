import { Injectable } from '@angular/core';

export class Asteroid {
  closeApproachDate:string 
  missDistance:string
  estimatedDiameterMin:number
  estimatedDiameterMax:number
  potentiallyHazardousAst:boolean
  orbitingBody:string
  nameAsteroid: string
}

@Injectable({
  providedIn: 'root'
})
export class AsteroidsPatternService {

  asteroid;

  asteroidservice: any[] = [];



  constructor() {
      
  }

  updateAsteroidInfos(date:string, dist:string, minD:number, maxD:number, hazard:boolean, orbitB:string, name:string) {
    this.asteroid = new Asteroid()
    this.asteroid.closeApproachDate = date;
    this.asteroid.missDistance = dist;
    this.asteroid.estimatedDiameterMin = minD;
    this.asteroid.estimatedDiameterMax = maxD;
    this.asteroid.potentiallyHazardousAst = hazard;
    this.asteroid.orbitingBody = orbitB;
    this.asteroid.nameAsteroid = name;

      console.log('asteroid service befor pushing', this.asteroid);
      console.log('asteroids array service befor pushing', this.asteroidservice);
      
    this.asteroidservice.push(this.asteroid);

    console.log('asteroid service after pushing', this.asteroid);
    console.log('asteroids array service after pushing', this.asteroidservice);

    
  }

  
 
}
