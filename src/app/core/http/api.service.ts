import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getVideo(url: string) {
    const params = new HttpParams({ fromObject: { url: encodeURIComponent(url) } });
    return this.httpClient.get(`http://localhost:5000/api/sources/youtube`, { params, responseType: 'text' });
  }
}
