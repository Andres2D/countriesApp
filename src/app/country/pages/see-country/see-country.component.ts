import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: []
})
export class SeeCountryComponent implements OnInit {

  country!: Country;
  mapUrl = '';

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    /*this.activateRoute.params
      .subscribe( ({id}) => {
        this.countryService.SearchCountry(id, 'alpha')
          .subscribe( country => {
          });
      });*/

      this.activateRoute.params
        .pipe(
          switchMap(( param ) => this.countryService.SearchCountry(param.id)),
          tap(console.log)
        )
        .subscribe(country => this.country = country)
  }

  GoToMap(){
    window.open( 
      `https://www.google.com/maps/search/?api=1&query=${this.country.name}`, "_blank");
  }
}
