import { Component, OnInit } from '@angular/core';
import { AsteroidsPatternService } from '../asteroids-pattern.service';





@Component({
  selector: 'app-asteroids-tab',
  templateUrl: './asteroids-tab.component.html',
  styleUrls: ['./asteroids-tab.component.scss']
})
export class AsteroidsTabComponent implements OnInit {
  displayedColumns: any[];
  asteroids: any[];
  constructor(public db: AsteroidsPatternService ) { 
    
  }
  
  ngOnInit(): void {
    this.asteroids = this.db.asteroidservice;
  }
  


}
