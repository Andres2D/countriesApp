import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  SearchCountries(term: string, endpoint: string): Observable<Country[]> {

    const params = new HttpParams()
      .set('fields', 'name;flag;capital;alpha2Code;population')

    return this.http.get<Country[]>(`${this._apiUrl}/${endpoint}/${term}`, { params })
      .pipe(
        tap(console.log)
      )
  }

  SearchCountry(term: string): Observable<Country> {
    return this.http.get<Country>(`${this._apiUrl}/alpha/${term}`);
  }
}
