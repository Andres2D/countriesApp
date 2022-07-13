import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = environment.url_api;

  constructor(private http: HttpClient) { }

  SearchCountries(term: string, endpoint: string): Observable<Country[]> {

    const params = new HttpParams()
      .set('fields', 'name,flag,capital,alpha2Code,population');
      
    return this.http.get<Country[]>(`${this._apiUrl}/${endpoint}/${term}`, { params });
  }

  SearchCountry(term: string): Observable<any> {
    return this.http.get<any>(`${this._apiUrl}/name/${term}`);
  }
}
