import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { AsteroidsPatternService } from '../asteroids-pattern.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // EXAMPLE OF REQUEST. https://api.nasa.gov/planetary/apod?api_key=9mhHsGTvRVzv3IPyTwOm47ZouJa9usvnNlkEaZn5.

  apy_key = '9mhHsGTvRVzv3IPyTwOm47ZouJa9usvnNlkEaZn5';
  dataFromUrl : any;
  latest_date = Date.now();
  date: Date | undefined;
  today: any;
  after_3_days: any | null;
  todayEU: any;
  asteroids: any;
  

  constructor(public datepipe: DatePipe,
    private astdb: AsteroidsPatternService) { }

  ngOnInit(): void {
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 3 );    
    this.today = this.datepipe.transform(this.latest_date, 'yyyy-MM-dd');
    this.todayEU = this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');
    this.after_3_days = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.init();
  }

  async init() {
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.today}&end_date=${this.today}&api_key=${this.apy_key}`;
    let response = await fetch(url);
    this.dataFromUrl = await response.json();
    this.asteroids = this.dataFromUrl.near_earth_objects[this.today];
    console.log(this.asteroids[0]);
    
    
  }

  

}
