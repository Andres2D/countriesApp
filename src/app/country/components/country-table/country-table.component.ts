import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})

export class CountryTableComponent implements OnInit {


  @Input() countries: Country[] = [];
  
  constructor() { }

  ngOnInit() {
    console.log(this.countries);
    
  }

}
