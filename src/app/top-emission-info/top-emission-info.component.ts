import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
 
import * as wjChart from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-top-emission-info',
  templateUrl: './top-emission-info.component.html',
  styleUrls: ['./top-emission-info.component.css']
})
export class TopEmissionInfoComponent implements OnInit, OnChanges {
  
  @Input('selectedCountryName') selectedCountryName!: string;
  
  sessionData: any[] = [];
  platformTooltip = 'Breakdown of country by sectors.';
  palette = wjChart.Palettes.darkly;
 
  constructor(private dataService: DataService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sessionData = this.dataService.getPlatformSessionData(this.selectedCountryName);
  }
 
  ngOnInit(): void {
  }
}
