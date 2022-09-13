import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../Service/api-service.service';
import { DataShareService, utilService } from '../Service/local-share.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  searchText = '';
  CurrentMatchdataSource = [];
  subcription: Subscription[] = [];

  constructor(private readonly dataShare: DataShareService,
    private readonly _utilService: utilService) {
  }

  ngOnInit(): void {
    const shareData = this.dataShare.ShareData.subscribe((data: any) => {
      console.log(data)
      if (data.current) {
        this.CurrentMatchdataSource = data.current;
      } else {
        const apiUnsubscribe = this._utilService.getAllMatchDetails();
        this.subcription.push(apiUnsubscribe);
      }
    });
    this.subcription.push(shareData);
  }


  ngOnDestroy() {
    this.subcription.forEach(x => {
      x.unsubscribe();
    });
  }


}
