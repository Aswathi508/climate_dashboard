import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WjCoreModule } from '@grapecity/wijmo.angular2.core';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartMapModule } from '@grapecity/wijmo.angular2.chart.map';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { GlobalInfoComponent } from './global-info/global-info.component';
import { OverallInfoComponent } from './overall-info/overall-info.component';
import { TopEmissionInfoComponent } from './top-emission-info/top-emission-info.component';
import { TopEmissionParametersComponent } from './top-emission-parameters/top-emission-parameters.component';

import { DataService } from './data.service';
import { TopCountryInfoComponent } from './top-country-info/top-country-info.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { FactorsTableComponent } from './factors-table/factors-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalInfoComponent,
    OverallInfoComponent,
    TopEmissionInfoComponent,
    TopEmissionParametersComponent,
    TopCountryInfoComponent,
    MapComponentComponent,
    CountryTableComponent,
    FactorsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjCoreModule,
    WjGridModule,
    WjChartModule,
    WjChartMapModule,
    WjGaugeModule,
    WjInputModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
