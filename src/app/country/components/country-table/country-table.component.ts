import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})

export class CountryTableComponent {
  @Input() countries: Country[] = [];

  constructor(private router: Router) {}

  goToCountry(name: any): void {
    console.log(name?.common);
    this.router.navigate([`/country/${name?.common}`]);
  }
}
