import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  sessionData = [
    { sessions: 'Top emitting Sectors', number: '' },
    { sessions: 'Remaining Sectors', number: '' }
  ];

  getSessionData() {
    return this.sessionData;
  }

  platformLoadTimeData = [
    { platform: 'Desktop', prevMonth: 1.58, curMonth: 1.49 },
    { platform: 'Phone', prevMonth: 2.01, curMonth: 1.96 },
    { platform: 'Tablet', prevMonth: 2.16, curMonth: 2.41 },
    { platform: 'Other', prevMonth: 2.53, curMonth: 2.65 }
  ];

  sectors = ['Industrial Processes', 'Land-use Change and Forestry', 'Waste', 'Agriculture', 'Fugitive Emissions', 'Other Fuel Combustion', 'Transportation', 'Manufacturing/Construction', 'Building', 'Electricity/Heat']


  franceSectorData = [
    { sector: 'Industrial Processes', value: 15.95 },
    { sector: 'Land-use Change and Forestry', value: -81.54 },
    { sector: 'Waste', value: 15.60 },
    { sector: 'Agriculture', value: 55.14 },
    { sector: 'Fugitive Emissions', value: 1.86 },
    { sector: 'Other Fuel Combustion', value: 11.79 },
    { sector: 'Transportation', value: 109.52 },
    { sector: 'Manufacturing/Construction', value: 25.87 },
    { sector: 'Building', value: 66.05 },
    { sector: 'Electricity/Heat', value: 35.73 }
  ];

  indiaSectorData = [
    { sector: 'Industrial Processes', value: 267.66 },
    { sector: 'Land-use Change and Forestry', value: -32.56 },
    { sector: 'Waste', value: 92.24 },
    { sector: 'Agriculture', value: 980.78 },
    { sector: 'Fugitive Emissions', value: 101.14 },
    { sector: 'Other Fuel Combustion', value: 64.92 },
    { sector: 'Transportation', value: 505.84 },
    { sector: 'Manufacturing/Construction', value: 648.73 },
    { sector: 'Building', value: 358.58 },
    { sector: 'Electricity/Heat', value: 1615.64 }
  ]

  russiaSectorData = [
    { sector: 'Industrial Processes', value: 103.74 },
    { sector: 'Land-use Change and Forestry', value: -560.60 },
    { sector: 'Waste', value: 170.11 },
    { sector: 'Agriculture', value: 150.06 },
    { sector: 'Fugitive Emissions', value: 531.86 },
    { sector: 'Other Fuel Combustion', value: 66.46 },
    { sector: 'Transportation', value: 302.41 },
    { sector: 'Manufacturing/Construction', value: 270.99 },
    { sector: 'Building', value: 249.87 },
    { sector: 'Electricity/Heat', value: 945.20 }
  ]

  australiaSectorData = [
    { sector: 'Industrial Processes', value: 2.46 },
    { sector: 'Land-use Change and Forestry', value: -4.64 },
    { sector: 'Waste', value: 12.01 },
    { sector: 'Agriculture', value: 134.55 },
    { sector: 'Fugitive Emissions', value: 43.19 },
    { sector: 'Other Fuel Combustion', value: 6.74 },
    { sector: 'Transportation', value: 71.44 },
    { sector: 'Manufacturing/Construction', value: 26.95 },
    { sector: 'Building', value: 15.36 },
    { sector: 'Electricity/Heat', value: 199.58 }
  ]

  canadaSectorData = [
    { sector: 'Industrial Processes', value: 21.06 },
    { sector: 'Land-use Change and Forestry', value: 78.09 },
    { sector: 'Waste', value: 18.22 },
    { sector: 'Agriculture', value: 61.36 },
    { sector: 'Fugitive Emissions', value: 60.86 },
    { sector: 'Other Fuel Combustion', value: 18.69 },
    { sector: 'Transportation', value: 118.01 },
    { sector: 'Manufacturing/Construction', value: 60.85 },
    { sector: 'Building', value: 65.31 },
    { sector: 'Electricity/Heat', value: 85.49 }
  ]

  usSectorData = [
    { sector: 'Industrial Processes', value: 211.43 },
    { sector: 'Land-use Change and Forestry', value: -394.78 },
    { sector: 'Waste', value: 133.21 },
    { sector: 'Agriculture', value: 379.31 },
    { sector: 'Fugitive Emissions', value: 393.91 },
    { sector: 'Other Fuel Combustion', value: 48.28 },
    { sector: 'Transportation', value: 1811.78 },
    { sector: 'Manufacturing/Construction', value: 430.35 },
    { sector: 'Building', value: 558.96 },
    { sector: 'Electricity/Heat', value: 2183.79 }
  ]

  brazilSectorData = [
    { sector: 'Industrial Processes', value: 31.16 },
    { sector: 'Land-use Change and Forestry', value: 400.08 },
    { sector: 'Waste', value: 70.36 },
    { sector: 'Agriculture', value: 486.48 },
    { sector: 'Fugitive Emissions', value: 32.58 },
    { sector: 'Other Fuel Combustion', value: 18.08 },
    { sector: 'Transportation', value: 242.98 },
    { sector: 'Manufacturing/Construction', value: 94.03 },
    { sector: 'Building', value: 23.14 },
    { sector: 'Electricity/Heat', value: 141.01 }
  ]

  getPlatformLoadTimeData() {
    return this.platformLoadTimeData;
  }

  getPlatformSessionData(country: any) {
    if (country === 'France') {
      return this.franceSectorData;
    } else if (country === 'India') {
      return this.indiaSectorData;
    } else if (country === 'Russia') {
      return this.russiaSectorData;
    } else if (country === 'Australia') {
      return this.australiaSectorData;
    } else if (country === 'Canada') {
      return this.canadaSectorData;
    } else if (country === 'United States') {
      return this.usSectorData;
    } else if (country === 'Brazil') {
      return this.brazilSectorData;
    }
    return this.franceSectorData;
  }


  browserLoadTimeData = [
    { browser: 'Chrome', prevMonth: 1.68, curMonth: 1.52 },
    { browser: 'Firefox', prevMonth: 1.93, curMonth: 1.71 },
    { browser: 'Edge', prevMonth: 2.25, curMonth: 2.38 },
    { browser: 'Safari', prevMonth: 2.11, curMonth: 2.03 },
    { browser: 'Other', prevMonth: 2.56, curMonth: 2.49 }
  ];

  browserSessionData = [
    { browser: 'Chrome', sessions: 34520 },
    { browser: 'Firefox', sessions: 29586 },
    { browser: 'Edge', sessions: 13793 },
    { browser: 'Safari', sessions: 22136 },
    { browser: 'Other', sessions: 11865 }
  ];

  getBrowserLoadTimeData() {
    return this.browserLoadTimeData;
  }

  getBrowserSessionData() {
    return this.browserSessionData;
  }

  countryData = [
    {
      Country: 'United States',
      AverageResponseTime: '1.2000',
      PageViews: '21.9k',
      IssuesReported: '72',
    },
    {
      Country: 'Canada',
      AverageResponseTime: '1.4250',
      PageViews: '12.7k',
      IssuesReported: '35',
    },
    {
      Country: 'Mexico',
      AverageResponseTime: '1.5500',
      PageViews: '4.2k',
      IssuesReported: '24',
    },
    {
      Country: 'Brazil',
      AverageResponseTime: '2.6505',
      PageViews: '1.3k',
      IssuesReported: '7',
    },
    {
      Country: 'Peru',
      AverageResponseTime: '3.2400',
      PageViews: '0.8k',
      IssuesReported: '2',
    },
    {
      Country: 'United Kingdom',
      AverageResponseTime: '1.7500',
      PageViews: '7.9k',
      IssuesReported: '29',
    },
    {
      Country: 'France',
      AverageResponseTime: '1.9000',
      PageViews: '3.4k',
      IssuesReported: '19',
    },
    {
      Country: 'Germany',
      AverageResponseTime: '2.1000',
      PageViews: '5.6k',
      IssuesReported: '15',
    },
    {
      Country: 'Spain',
      AverageResponseTime: '2.2500',
      PageViews: '2.3k',
      IssuesReported: '9',
    },
    {
      Country: 'Italy',
      AverageResponseTime: '2.3500',
      PageViews: '1.9k',
      IssuesReported: '6',
    },
    {
      Country: 'Netherlands',
      AverageResponseTime: '1.9250',
      PageViews: '0.9k',
      IssuesReported: '4',
    },
    {
      Country: 'Finland',
      AverageResponseTime: '2.0150',
      PageViews: '1.1k',
      IssuesReported: '7',
    },
    {
      Country: 'Denmark',
      AverageResponseTime: '3.5025',
      PageViews: '1.8k',
      IssuesReported: '9',
    },
    {
      Country: 'Norway',
      AverageResponseTime: '2.7500',
      PageViews: '2.1k',
      IssuesReported: '14',
    },
    {
      Country: 'Poland',
      AverageResponseTime: '3.4000',
      PageViews: '0.3k',
      IssuesReported: '3',
    },
    {
      Country: 'Russia',
      AverageResponseTime: '2.2250',
      PageViews: '5.9k',
      IssuesReported: '11',
    },
    {
      Country: 'Ukraine',
      AverageResponseTime: '3.2500',
      PageViews: '3.1k',
      IssuesReported: '8',
    },
    {
      Country: 'China',
      AverageResponseTime: '2.7000',
      PageViews: '11.3k',
      IssuesReported: '18',
    },
    {
      Country: 'Japan',
      AverageResponseTime: '2.3000',
      PageViews: '13.8k',
      IssuesReported: '17',
    },
    {
      Country: 'Australia',
      AverageResponseTime: '3.1000',
      PageViews: '2.4k',
      IssuesReported: '7',
    },
  ];

  globalData = [
    {
      Country: 'France',
      Population: '6,75,71,107',
      CurrentEmission: '376 MtCO2e',
      PredictedEmission: '251.88 MtCO2e',
      MajorContributingSector: 'Transportation'
    },
    {
      Country: 'India',
      Population: '1,38,00,04,385',
      CurrentEmission: '3166.95 MtCO2e',
      PredictedEmission: '4625.85 MtCO2e',
      MajorContributingSector: 'Electricity/Heat'
    },
    {
      Country: 'Russia',
      Population: '14,52,45,148',
      CurrentEmission: '1836.79 MtCO2e',
      PredictedEmission: '2257.68 MtCO2e',
      MajorContributingSector: 'Electricity/Heat'
    },
    {
      Country: 'Australia',
      Population: '2,56,49,248',
      CurrentEmission: '580.76 MtCO2e',
      PredictedEmission: '498.58 MtCO2e',
      MajorContributingSector: 'Electricity/Heat'
    },
    {
      Country: 'Canada',
      Population: '3,80,28,638',
      CurrentEmission: '721.31 MtCO2e',
      PredictedEmission: '575.30 MtCO2e',
      MajorContributingSector: 'Transportation'
    },
    {
      Country: 'United States',
      Population: '33,15,11,512',
      CurrentEmission: '5268.61 MtCO2e',
      PredictedEmission: '5625.76 MtCO2e',
      MajorContributingSector: 'Electricity/Heat'
    },
    {
      Country: 'Brazil',
      Population: '21,31,96,304',
      CurrentEmission: '1470.25 MtCO2e',
      PredictedEmission: '1589.23 MtCO2e',
      MajorContributingSector: 'Agriculture'
    }
  ]

  getCountryData() {
    return this.globalData;
  }

  isValidCountry(countryName: string): boolean {
    for (var i = 0; i < this.globalData.length; i++) {
      if (this.globalData[i].Country == countryName) {
        return true;
      }
    }
    return false;
  }

  // sectors = ['Industrial Processes', 'Land-use Change and Forestry', 'Waste', 'Agriculture', 'Fugitive Emissions', 'Other Fuel Combustion', 'Transportation', 'Manufacturing/Construction', 'Building', 'Electricity/Heat']

  getCountryInfo(country: string) {
    var data = [],
      platforms = ['Desktop', 'Mobile', 'Tablet', 'Other'],
      browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Other'];
    for (var i = 0; i < 200; i++) {
      data.push({
        country: country,
        sessionDuration:
          Math.round(Math.random() * 7) +
          'm ' +
          Math.round(Math.random() * 60) +
          's',
        ipAddress:
          Math.round(Math.random() * (999 - 1) + 1) +
          '.' +
          Math.round(Math.random() * (999 - 1) + 1) +
          '.' +
          Math.round(Math.random() * (999 - 1) + 1) +
          '.' +
          Math.round(Math.random() * (999 - 1) + 1),
        platform: platforms[Math.round(Math.random() * 3)],
        browser: browsers[Math.round(Math.random() * 4)],
      });
    }
    return data;
  }

  getSectorWiseInfo(country: string) {
    var data = []
    for (var i = 0; i < 10; i++) {
      data.push({
        country: country,
        countryCode: this.getCountryCode(country),
        sectors: this.sectors[i],
        predictedValue: this.getPredictedSectorValue(this.sectors[i], country),
        unit: 'MtCO2e'
      })
    }
    return data;
  }

  getPredictedSectorValue(sector: any, country: any) {
    var dataset : any[] = []
    if (country === 'France') {
      dataset = this.franceSectorData;
    } else if (country === 'India') {
      dataset = this.indiaSectorData;
    } else if (country === 'Russia') {
      dataset =  this.russiaSectorData;
    } else if (country === 'Australia') {
      dataset = this.australiaSectorData;
    } else if (country === 'Canada') {
      dataset =  this.canadaSectorData;
    } else if (country === 'United States') {
      dataset =  this.usSectorData;
    } else if (country === 'Brazil') {
      dataset =  this.brazilSectorData;
    }
    for (var i = 0; i < dataset.length; i++) {
      if (dataset[i].sector == sector) {
        return dataset[i].value
      }
    }
    return ''
  }

  getCountryCode(country: string) {
    for (var i = 0; i < this.countryCodes.length; i++) {
      if (this.countryCodes[i].country == country) {
        return this.countryCodes[i].code
      }
    }
    return ''
  }

  countryCodes = [
    { country: 'United States', code: 'USA' },
    { country: 'Canada', code: 'CAN' },
    { country: 'Mexico', code: 'MEX' },
    { country: 'Brazil', code: 'BRA' },
    { country: 'Peru', code: 'PER' },
    { country: 'United Kingdom', code: 'GBR' },
    { country: 'France', code: 'FRA' },
    { country: 'Germany', code: 'DEU' },
    { country: 'Spain', code: 'ESP' },
    { country: 'Italy', code: 'ITA' },
    { country: 'Netherlands', code: 'NLD' },
    { country: 'Finland', code: 'FIN' },
    { country: 'Denmark', code: 'DNK' },
    { country: 'Norway', code: 'NOR' },
    { country: 'Poland', code: 'POL' },
    { country: 'Russia', code: 'RUS' },
    { country: 'Ukraine', code: 'UKR' },
    { country: 'China', code: 'CHN' },
    { country: 'Japan', code: 'JPN' },
    { country: 'Australia', code: 'AUS' },
    { country: 'India', code: 'IND' }
  ]

  reportedIssues = [
    { country: 'United States', issuesReported: 72 },
    { country: 'Canada', issuesReported: 35 },
    { country: 'Mexico', issuesReported: 24 },
    { country: 'Brazil', issuesReported: 7 },
    { country: 'Peru', issuesReported: 2 },
    { country: 'United Kingdom', issuesReported: 29 },
    { country: 'France', issuesReported: 19 },
    { country: 'Germany', issuesReported: 15 },
    { country: 'Spain', issuesReported: 9 },
    { country: 'Italy', issuesReported: 6 },
    { country: 'Netherlands', issuesReported: 4 },
    { country: 'Finland', issuesReported: 7 },
    { country: 'Denmark', issuesReported: 9 },
    { country: 'Norway', issuesReported: 14 },
    { country: 'Poland', issuesReported: 3 },
    { country: 'Russia', issuesReported: 11 },
    { country: 'Ukraine', issuesReported: 8 },
    { country: 'China', issuesReported: 18 },
    { country: 'Japan', issuesReported: 17 },
    { country: 'Australia', issuesReported: 7 },
  ];

  getIssueData(country: string) {
    var issues = [
      {
        issue: '500 Internal Server Error',
        status: 'High',
        message: 'General purpose error: potential server overload',
      },
      {
        issue: '400 Bad Request',
        status: 'High',
        message: 'Browser error: corrupted request',
      },
      {
        issue: '408 Request Time-Out',
        status: 'High',
        message: 'Slow response time: check server request',
      },
      {
        issue: '403 Forbidden',
        status: 'Moderate',
        message:
          'Refused access: user attempted to access forbidden directory',
      },
      {
        issue: '501 Not Implemented',
        status: 'Moderate',
        message: 'Request refused: unsupported browser feature',
      },
      {
        issue: '401 Unauthorised',
        status: 'Low',
        message: 'Login failed: user does not have access',
      },
      {
        issue: '404 Not Found',
        status: 'Low',
        message: 'Page not returned: check status of requested page',
      },
    ],
      data = [];
    for (var i = 0; i < this.reportedIssues.length; i++) {
      if (this.reportedIssues[i].country == country) {
        for (var j = 0; j < this.reportedIssues[i].issuesReported; j++) {
          var selector = Math.round(Math.random() * 6);
          data.push({
            country: country,
            issue: issues[selector].issue,
            status: issues[selector].status,
            message: issues[selector].message,
          });
        }
        break;
      }
    }
    return data;
  }
}