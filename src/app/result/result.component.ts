import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ApiService } from '../Service/api-service.service';
import { DataShareService, utilService } from '../Service/local-share.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  searchText = '';
  resultMatchdataSource = [];
  subcription: Subscription[] = [];

  constructor(private readonly dataShare: DataShareService,
    private readonly _utilService: utilService) {
  }

  ngOnInit(): void {
    const shareResultData = this.dataShare.ShareData.subscribe((data: any) => {
      if (data.results) {
        this.resultMatchdataSource = data.results;
      } else {
        const apiUnsubscribe = this._utilService.getAllMatchDetails();
        this.subcription.push(apiUnsubscribe);
      }
    });
    this.subcription.push(shareResultData);
  }

  ngOnDestroy() {
    this.subcription.forEach(x => {
      x.unsubscribe();
    });
  }

}
