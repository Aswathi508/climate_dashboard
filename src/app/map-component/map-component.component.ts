import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { Palettes } from "@grapecity/wijmo.chart";
import { FlexMap } from '@grapecity/wijmo.chart.map';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit {

  @ViewChild('flexMap') flexMap!: FlexMap ;
  @Output() countryName = new EventEmitter<string>();
  @Output() hitCountry = new EventEmitter();
  flexMapData: any;
  dataMap = new Map();
  pageViewMap = new Map();
  issuesReportedMap = new Map();
  colors = Palettes.Diverging.RdYlGn;
  selectedColor = '#188d9b';
  selectedCountry = '';
  selectedID: any;
  hitTestInfo: any;
  binding = (o: any) => this.dataMap.get(o.properties.name);
  scale = (v: number) => 1 - v;
  tooltipContent = (f: any) => this.getCountryToolTip(f);
  currentEmission = new Map();
  predictedEmission = new Map();
  majorSector = new Map();


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.flexMapData = this.dataService.getCountryData();
    Array.prototype.forEach.call(this.flexMapData, el => {
      this.dataMap.set(el.Country, el.Population);
      this.currentEmission.set(el.Country, el.CurrentEmission);
      this.predictedEmission.set(el.Country, el.PredictedEmission);
      this.majorSector.set(el.Country, el.MajorContributingSector);
    });
  }

  initializeMap(layer: any) {
    this.flexMap.zoomTo(layer.getGeoBBox());
    this.flexMap.hostElement.addEventListener('mousedown', (e) => {
      this.hitTestInfo = this.flexMap.hitTest(e);
      console.log('Hit', this.hitTestInfo._item.name)
      if (this.hitTestInfo._item !== undefined) {
        this.hitCountry.emit(this.hitTestInfo._item.name)
        this.emitCountryName(this.hitTestInfo._item.name);
        let el = document.elementFromPoint(e.x, e.y);
        let id = el ? el.getAttribute('wj-map:id') : undefined;
        this.selectedID = id;
        this.flexMap.invalidate(true);
      }
    });
    this.flexMap.rendered.addHandler((s, a) => {
      const layer = this.flexMap.layers[0];
      const g = layer._g;
      if (g && this.selectedID && this.validCountry(this.hitTestInfo._item.name)) {
        let list = [];
        for (let i = 0; i < g.childNodes.length; i++) {
          const node = g.childNodes[i];
          let id = node.getAttribute('wj-map:id');
          if (id === this.selectedID) {
            node.setAttribute('fill', this.selectedColor);
            list.push(node);
          }
        }
        list.forEach((el) => el.parentNode.appendChild(el));
      }
    });
  }

  furtherDetails(event: any) {
    console.log('e',event)
  }

  emitCountryName(value: string) {
    this.countryName.emit(value);
  }

  getCountryToolTip(val: any): string {
    if (this.dataService.isValidCountry(val.name)) {
      // + `<br>` + "<a href=''>(show more)</a>" 
      // return `<b>` + val.name + `</b><br>` + 'Average Response Time: ' + this.dataMap.get(val.name) + `<br>` + 'Page Views: ' + this.pageViewMap.get(val.name) + `<br>` + 'Issues Reported: ' + this.issuesReportedMap.get(val.name);
      return `<b>` + val.name + `</b><br>` + 'Population: ' + this.dataMap.get(val.name) + `<br>` + 'Current Emission Rate: ' + this.currentEmission.get(val.name) + `<br>` + 'Forecasted Emission (2030): ' + this.predictedEmission.get(val.name) + `<br>` + 'Major Contributing Sector: ' + this.majorSector.get(val.name);
    }
    return `<b>` + val.name + `</b><br>` + 'No data available';
  }

  validCountry(value: string) {
    for (var i = 0; i < this.flexMapData.length; i++) {
      if (this.flexMapData[i].Country == value) {
        return true;
      }
    }
    return false;
  }


}

