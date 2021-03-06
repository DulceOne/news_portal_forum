import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  public httpOptions = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token') || 'x-access-token',
    })
  };

  post<T>(url: string, body: any = {}) {
    this.httpOptions = this.reCoolHeader()
    
    return this.http.post(this.fullUrl()+url, body, this.httpOptions).pipe(
      // map((response) => {
        // if (response.status === 401) {
        //   this.redirect();
        // }
      // }),
      catchError((err) => throwError(err))
    )as Observable<T>;
  }

  get<T>(url) {
    this.httpOptions = this.reCoolHeader()

    return this.http.get(this.fullUrl()+url, this.httpOptions).pipe(
      catchError((err) => throwError(err))
    ) as Observable<T>
  } 

  reCoolHeader() {
    return {
      headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token') || 'x-access-token',
      })
    }
  }

  fullUrl() {
    return environment.apiUrl+environment.prefix
  }
}
