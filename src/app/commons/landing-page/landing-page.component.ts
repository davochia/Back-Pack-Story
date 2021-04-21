import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  
  constructor() { }

  ngOnInit() {}

}
