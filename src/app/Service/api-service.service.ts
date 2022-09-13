import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstants } from './url-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient,
    private readonly urlService: UrlConstants) { }

  public getList() {
    return this.http.get<any>(this.urlService.SCORE_LIST);
  }
}
