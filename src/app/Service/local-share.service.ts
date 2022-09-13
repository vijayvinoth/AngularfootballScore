import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public ShareData = new BehaviorSubject('');

  constructor() { }

  UpdateDataShare(data: any) {
    this.ShareData.next(data);
  }

}


@Injectable({
  providedIn: 'root'
})
export class utilService {
  constructor(private readonly apiService: ApiService,
    private readonly dataShare: DataShareService) { }

  getAllMatchDetails() {
    return this.apiService.getList().subscribe(resp => {
      this.dataShare.UpdateDataShare(resp);
    }, err => {
      console.log('error', err);
    });
  }

}
