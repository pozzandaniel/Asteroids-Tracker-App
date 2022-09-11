import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // EXAMPLE OF REQUEST. https://api.nasa.gov/planetary/apod?api_key=9mhHsGTvRVzv3IPyTwOm47ZouJa9usvnNlkEaZn5.

  apy_key = '9mhHsGTvRVzv3IPyTwOm47ZouJa9usvnNlkEaZn5';
  dataFromUrl : any;
  today = Date.now();

  constructor() { }

  ngOnInit(): void {
    this.init();
    console.log('today is: ', this.today)

  }

  async init() {
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${this.apy_key}`;
    let response = await fetch(url);
    this.dataFromUrl = await response.json();
    this.renderAsteroids();
  }

  renderAsteroids() {

  }

}
