import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 
import * as wjChart from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-top-emission-parameters',
  templateUrl: './top-emission-parameters.component.html',
  styleUrls: ['./top-emission-parameters.component.css']
})
export class TopEmissionParametersComponent implements OnInit {
  loadTimeData: any[];
  sessionData: any[];
  browserTooltip = 'Breakdown of sessions by browser.';
  palette = wjChart.Palettes.darkly;
 
  constructor(private dataService: DataService) {
    this.loadTimeData = dataService.getBrowserLoadTimeData();
    this.sessionData = dataService.getBrowserSessionData();
  }
 
  ngOnInit(): void {
  }
}
