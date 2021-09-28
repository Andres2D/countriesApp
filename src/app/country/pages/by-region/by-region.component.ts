import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {
  
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = '';
  countries: Country[] = [];
  showAlertError: boolean = false;

  constructor(private countryService: CountryService) { }

  ActiveRegion(region: string){
    if(region === this.activatedRegion){return}
    this.countries = [];
    this.activatedRegion = region;
    this.countryService.SearchCountries(region, 'continent')
      .subscribe((countries) => {
        this.countries = countries
      }, error => {
        this.countries = [];
        this.showAlertError = true;
      });
  }

  GetCssClass(region: string): string{
    return region === this.activatedRegion ? 'btn btn-primary mt-1' : 'btn btn-outline-primary mt-1';
  }

}
