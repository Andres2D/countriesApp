import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li{
    cursor: pointer;
  }`]
})
export class ByCountryComponent {

  term: string = 'Colombia';
  isError: boolean = false;
  countries: Country[] = [];
  countriesSuggestions: Country[] = [];
  showSuggestions = false;

  constructor(private countryService: CountryService) { }

  Search( term: string){
    
    this.showSuggestions = false;
    this.term = term;
    this.countries = [];
    this.isError = false;
    this.countryService.SearchCountries(this.term, 'name')
      .subscribe( (response) => {
        this.countries = response;
      }, (error) =>{
        this.isError = true;
      });
  }

  Suggestions(term: string){
    this.showSuggestions = true;
    this.isError = false;
    this.term = term;
    this.countryService.SearchCountries(term, 'name')
      .subscribe( countries => this.countriesSuggestions = countries.splice(0,5),
      error => {
        this.countriesSuggestions = []
      });
  }

  SearchSuggestion(term: string){
    this.Search(term);
  }
}
