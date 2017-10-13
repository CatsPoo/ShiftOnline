import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeAndDateService {
  private http: Http;
  private url: String = 'http://localhost:3000';

  constructor(_http: Http) {
    this.http = _http;
  }

  getCurrentTime() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + '/bullets/getTime', {}, { headers: headers })
      .map(res => res.json());

  }
}