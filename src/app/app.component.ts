import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carbon-dashboard';
  selectedCountryName: string = '';

countryName(e: any) {
    this.selectedCountryName = e;
  }

  selectedCountry(data: any) {
    console.log('parent', data);
    this.selectedCountryName = data;
  }

}
