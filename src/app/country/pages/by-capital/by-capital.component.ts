import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: []
})
export class ByCapitalComponent {

  term: string = 'Colombia';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  Search( term: string){
    this.term = term;
    this.countries = [];
    this.isError = false;
    this.countryService.SearchCountries(this.term, 'capital')
      .subscribe( (response) => {
        this.countries = response;
      }, (error) =>{
        this.isError = true;
      });
  }

}
