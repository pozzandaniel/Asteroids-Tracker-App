import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common'
import { AsteroidsPatternService } from '../asteroids-pattern.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/fr';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class MainComponent implements OnInit {
  // EXAMPLE OF REQUEST. https://api.nasa.gov/planetary/apod?api_key=9mhHsGTvRVzv3IPyTwOm47ZouJa9usvnNlkEaZn5.

  apy_key = '9mhHsGTvRVzv3IPyTwOm47ZouJa9usvnNlkEaZn5';
  dataFromUrl : any;
  latest_date = Date.now();
  date: Date | undefined;
  today: any;
  after_3_days: any | null;
  dateEU: any;
  asteroids: any;
  pickedDate: any;
  

  constructor(public datepipe: DatePipe,
    private db: AsteroidsPatternService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string) { }

  ngOnInit(): void {
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 3 );    
    this.today = this.datepipe.transform(this.latest_date, 'yyyy-MM-dd');
    this.dateEU = this.datepipe.transform(this.latest_date, 'dd MMMM yyyy');
    this.after_3_days = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.init(this.today);
    this.getLocalFormat();
  }
  
  async init(date) {
    this.db.removeElements();
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${this.apy_key}`;
    let response = await fetch(url);
    this.dataFromUrl = await response.json();
    this.asteroids = this.dataFromUrl.near_earth_objects[date];
    console.log('asteroids from fetch',this.asteroids);
    this.getAPIASteroids();
    
    
 
  }

  getAPIASteroids(){
    for(let i = 0; i < this.asteroids.length; i++) {
      this.getAPIAsteroid(i);
    }
  }

  getAPIAsteroid(i){
    let approchDate = this.asteroids[i].close_approach_data[0].close_approach_date_full;
    let missDistance = this.asteroids[i].close_approach_data[0].miss_distance.lunar;
    let diameterMin = this.asteroids[i].estimated_diameter.kilometers.estimated_diameter_min;
    let diameterMax = this.asteroids[i].estimated_diameter.kilometers.estimated_diameter_max;
    let potentiallyHazard = this.asteroids[i].is_potentially_hazardous_asteroid;
    let orbitBody = this.asteroids[i].close_approach_data[0].orbiting_body;
    let nameAsteroid = this.asteroids[i].name;
    let sentryObj = this.asteroids[i].is_sentry_object;


    this.db.updateAsteroidInfos(approchDate, missDistance, diameterMin, diameterMax, 
      potentiallyHazard, orbitBody, nameAsteroid, sentryObj);

  }

  returnAsteroids() {
    let date = this.datepipe.transform(this.pickedDate, 'yyyy-MM-dd');
    this.dateEU = this.datepipe.transform(date, 'dd MMMM yyyy');
    this.init(date);
  }


  getLocalFormat() {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale)
    this.pickedDate = this.changeFormatDate();
  }

  changeFormatDate() {
    if(this._locale === 'fr') {
      return 'DD/MM/YYYY';
    } else {
      return 'MM/DD/YYYY'
    }
  }
  

}
