import { Component, OnInit } from '@angular/core';
import { Asteroid } from '../asteroids-pattern.service';

@Component({
  selector: 'app-asteroid-schedule',
  templateUrl: './asteroid-schedule.component.html',
  styleUrls: ['./asteroid-schedule.component.scss']
})
export class AsteroidScheduleComponent implements OnInit {
  asteroid: Asteroid;
  constructor() { }

  ngOnInit(): void {
    console.log(this.asteroid)
  }

}
