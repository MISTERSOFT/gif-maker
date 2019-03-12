import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  test() {
    return this.httpClient.get(`/api/download`, { responseType: 'text' });
  }
}
