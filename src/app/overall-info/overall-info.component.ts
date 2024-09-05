import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-overall-info',
  templateUrl: './overall-info.component.html',
  styleUrls: ['./overall-info.component.css']
})
export class OverallInfoComponent implements OnInit, OnChanges {
  @Input('selectedCountryName') selectedCountryName!: string;
  data: any[];
  sessionTooltip = 'Top Emitting Sectors breakdown.';
  totalEmission: number = 0;
  sectorData: any;
  recommendationData: any;
  top3sectors: any;
  remainingSectors: any;
  franceRecommendation = [
    { sector: 'Transportation', rec: 'Promote EV' },
    { sector: 'Building', rec: 'Renewable Energy Integration' },
    { sector: 'Agriculture', rec: 'Precision Agriculture' }
  ]

  indiaRecommendation = [
    { sector: 'Electricity/Heat', rec: 'Invest heavily in solar, wind, geothermal, and hydropower' },
    { sector: 'Agriculture', rec: 'Agroforestry' },
    { sector: 'Manufacturing/Construction', rec: 'Energy Efficiency Improvements' }
  ]

  russiaRecommendation = [
    { sector: 'Electricity/Heat', rec: 'Invest heavily in solar, wind, geothermal, and hydropower' },
    { sector: 'Fugitive Emissions', rec: 'Research and Innovation' },
    { sector: 'Transportation', rec: 'Fuel Efficiency Standards' }
  ]

  australiaRecommendation = [
    { sector: 'Electricity/Heat', rec: 'Enhance Energy Efficiency and Conservation' },
    { sector: 'Agriculture', rec: 'Agroforestry' },
    { sector: 'Transportation', rec: 'Establish Cycling/Walking Infrastructure' }
  ]

  canadaRecommendation = [
    { sector: 'Transportation', rec: 'Promote EV' },
    { sector: 'Electricity/Heat', rec: 'Invest heavily in solar, wind, geothermal, and hydropower' },
    { sector: 'Land Use Change and Forestry', rec: 'Reforestation and Afforestation' }
  ]

  usRecommendation = [
    { sector: 'Electricity/Heat', rec: 'Enhance Energy Efficiency and Conservation' },
    { sector: 'Transportation', rec: 'Fuel Efficiency Standards' },
    { sector: 'Building', rec: 'Energy-Efficient Building Codes' }
  ]

  brazilRecommendation = [
    { sector: 'Agriculture', rec: 'Sustainable Farming Practices' },
    { sector: 'Land Use Change and Forestry', rec: 'Reforestation and Afforestation' },
    { sector: 'Transportation', rec: 'Promote EV' }
  ]

  constructor(private dataService: DataService) {
    this.data = dataService.getSessionData();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sectorData = this.dataService.getSectorWiseInfo(this.selectedCountryName)
    this.recommendationData = this.selectedCountryName === 'France' ? this.franceRecommendation : 
                              this.selectedCountryName === 'India' ? this.indiaRecommendation :
                              this.selectedCountryName === 'Russia' ? this.russiaRecommendation : 
                              this.selectedCountryName === 'Australia' ? this.australiaRecommendation : 
                              this.selectedCountryName === 'Canada' ? this.canadaRecommendation :
                              this.selectedCountryName === 'United States' ? this.usRecommendation :
                              this.selectedCountryName === 'Brazil' ? this.brazilRecommendation : this.franceRecommendation;
    this.computeTotalEmission(this.sectorData)
  }

  computeTotalEmission(data: any) {
    this.totalEmission = 0
    this.top3sectors = 0
    this.remainingSectors = 0
    for (var i = 0; i < data.length; i++) {
      this.totalEmission += data[i].predictedValue
    }
    for (var i = 0; i < this.recommendationData.length; i++) {
      const recSector = data.find((recommendation: any) => recommendation.sectors === this.recommendationData[i].sector);
      this.top3sectors += recSector.predictedValue
    }
    this.totalEmission = Math.round(this.totalEmission * 100) / 100
    console.log('k',this.totalEmission)
    this.remainingSectors = this.totalEmission - this.top3sectors;
    this.data[0].number = this.top3sectors;
    this.data[1].number = this.remainingSectors;
    this.data = [...this.data]
  }
}