import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: any;
  mapUrl = '';
  countryNativeName: any = '';
  countryFemonymsM: any = '';
  countryFemonymsF: any = '';

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    this.activateRoute.params
      .pipe(
        switchMap(( param ) => this.countryService.SearchCountry(param.id))
      )
      .subscribe(country => {
        this.country = country[0];
        this.countryNativeName = Object.entries(this.country.name.nativeName)[0][1];
        this.countryFemonymsM = Object.entries(this.country.demonyms)[0][1];
        this.countryFemonymsF = Object.entries(this.country.demonyms)[0][1];
      })
  }

  GoToMap(){
    window.open( 
      `https://www.google.com/maps/search/?api=1&query=${this.country.name.common}`, "_blank");
  }
}
