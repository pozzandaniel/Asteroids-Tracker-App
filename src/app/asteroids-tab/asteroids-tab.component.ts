import { Component, OnInit } from '@angular/core';
import { AsteroidsPatternService } from '../asteroids-pattern.service';


@Component({
  selector: 'app-asteroids-tab',
  templateUrl: './asteroids-tab.component.html',
  styleUrls: ['./asteroids-tab.component.scss']
})
export class AsteroidsTabComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource:any;

  constructor(private asteroidService: AsteroidsPatternService ) { }

  ngOnInit(): void {

  }

}
