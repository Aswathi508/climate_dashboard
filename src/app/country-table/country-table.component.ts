import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { DataService } from '../data.service';
import * as wjCore from '@grapecity/wijmo';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent  implements OnInit, OnChanges {
  @Input('selectedCountryName') selectedCountryName!: string;
  selectedCountryData: wjCore.CollectionView;
  usersTooltip = 'Information on the last 200 users from selected country.';
 
  constructor(private dataService: DataService) {
    this.selectedCountryData = new wjCore.CollectionView(dataService.getCountryInfo('United States'), {
      pageSize: 25
    })
  }
 
  ngOnInit(): void {}
 
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedCountryData = new wjCore.CollectionView(this.dataService.getSectorWiseInfo(changes['selectedCountryName'].currentValue))
    // if(changes['selectedCountryName'].currentValue && this.dataService.isValidCountry(changes['selectedCountryName'].currentValue)) {
    //   this.selectedCountryData = new wjCore.CollectionView(this.dataService.getCountryInfo(changes['selectedCountryName'].currentValue), {
    //     pageSize: 25
    //   });
    // }
  }
}
