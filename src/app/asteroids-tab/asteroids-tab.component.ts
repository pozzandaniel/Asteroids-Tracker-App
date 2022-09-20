import {  Component, OnInit } from '@angular/core';
import { AsteroidsPatternService } from '../asteroids-pattern.service';


export class Asteroid {

}


@Component({
  selector: 'app-asteroids-tab',
  templateUrl: './asteroids-tab.component.html',
  styleUrls: ['./asteroids-tab.component.scss']
})
export class AsteroidsTabComponent implements OnInit  {
  
  
 

  constructor(public db: AsteroidsPatternService ) { 
    
  }
  
 

  ngOnInit() {
    
  }


  
 
  


}
