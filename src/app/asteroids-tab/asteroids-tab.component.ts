import {  Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsteroidScheduleComponent } from '../asteroid-schedule/asteroid-schedule.component';
import { AsteroidsPatternService } from '../asteroids-pattern.service';


export class Asteroid {

}


@Component({
  selector: 'app-asteroids-tab',
  templateUrl: './asteroids-tab.component.html',
  styleUrls: ['./asteroids-tab.component.scss']
})
export class AsteroidsTabComponent implements OnInit  {
  
  
 

  constructor(public db: AsteroidsPatternService,
    public dialog: MatDialog ) { 
    
  }
  
 

  ngOnInit() {
    
  }


  
 
  showAsteroidDetails(asteroid){
    let dialog = this.dialog.open(AsteroidScheduleComponent);
    dialog.componentInstance.asteroid = asteroid;
  }


}
