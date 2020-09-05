import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Cities} from '../models/city'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  
})
export class CityComponent implements OnInit {

  cities = Cities;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cities);
  }

}
