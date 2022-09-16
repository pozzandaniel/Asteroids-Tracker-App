import { DataSource } from '@angular/cdk/collections';
import { Component, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsteroidsPatternService } from '../asteroids-pattern.service';

export interface AsteroidElement {
  closeApproachDate: string;
  estimatedDiameterMax:number,
  estimatedDiameterMin: number,
  missDistance: string;
  nameAsteroid: string;
  orbitingBody: string,
  potentiallyHazardousAst: boolean;
}

let ELEMENT_DATA: AsteroidElement[] = [];


@Component({
  selector: 'app-asteroids-tab',
  templateUrl: './asteroids-tab.component.html',
  styleUrls: ['./asteroids-tab.component.scss']
})
export class AsteroidsTabComponent implements OnChanges {
  displayedColumns: any[];
  constructor(public db: AsteroidsPatternService ) { 
    
  }
  
  ngOnInit(): void {
    this.db.asteroids = new BehaviorSubject([])
    data$ = this.db.asteroids.asObservable();
    // this.data$.subscribe(val => console.log(val));
    // this.dataSource = this.db.asteroids
    // this.dataSource = ELEMENT_DATA;
    ELEMENT_DATA = this.db.asteroids;
   
    this.displayedColumns = ['closeApproachDate', 'estimatedDiameterMax', 'estimatedDiameterMin' ,'missDistance',
     'nameAsteroid', 'orbitingBody', 'potentiallyHazardousAst'];
     console.log('element_data is: ', this.dataSource);
  }
  
  ngOnChanges(changes) {
    if(changes){
       console.log('changes are: ', changes);

    }

  }

}
