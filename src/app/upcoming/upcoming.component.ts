import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataShareService, utilService } from '../Service/local-share.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  searchText = '';
  upcomingMatchdataSource = [];
  subcription: Subscription[] = [];

  constructor(private readonly dataShare: DataShareService,
    private readonly _utilService: utilService) {
  }


  ngOnInit(): void {
    const shareUpcomingData = this.dataShare.ShareData.subscribe((data: any) => {
      if (data.upcoming) {
        this.upcomingMatchdataSource = data.upcoming;
      }else {
        const apiUnsubscribe = this._utilService.getAllMatchDetails();
        this.subcription.push(apiUnsubscribe);
      }
    });
    this.subcription.push(shareUpcomingData);
  }

  ngOnDestroy() {
    this.subcription.forEach(x => {
      x.unsubscribe();
    });
  }


}
