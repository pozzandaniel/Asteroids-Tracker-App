import { Injectable } from '@angular/core';

export class Asteroid {
  closeApproachDate:string 
  missDistance:string
  estimatedDiameterMin:number
  estimatedDiameterMax:number
  potentiallyHazardousAst:boolean
  orbitingBody:string
  nameAsteroid: string
  sentryObject: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AsteroidsPatternService {

  asteroid;

  asteroidservice: any[] = [];



  constructor() {
      
  }

  updateAsteroidInfos(date:string, dist:string, minD:number, maxD:number, hazard:boolean, orbitB:string, name:string, sentryObj:boolean) {
    this.asteroid = new Asteroid()
    this.asteroid.closeApproachDate = date;
    this.asteroid.missDistance = dist;
    this.asteroid.estimatedDiameterMin = minD;
    this.asteroid.estimatedDiameterMax = maxD;
    this.asteroid.potentiallyHazardousAst = hazard;
    this.asteroid.orbitingBody = orbitB;
    this.asteroid.nameAsteroid = name;
    this.asteroid.sentryObject = sentryObj;
    this.asteroidservice.push(this.asteroid);
    

  }

  removeElements(){
    this.asteroidservice = [];

  }

  
 
}
