import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient , private router: Router) {}
  // Request options
  // private getHeaders(): HttpHeaders {
  //   const headersConfig = {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   };
  //   return new HttpHeaders(headersConfig);
  // }

  get(path: string, params?: HttpParams) : Observable<object> {
    return this.http.get(`${this.apiUrl}/${path}`);
  }

  redirectToNotFound() {
    this.router.navigate(['/404']);
  }
}
