import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-patient-growth',
  templateUrl: './patient-growth.component.html',
  styleUrl: './patient-growth.component.scss',
})

export class PatientGrowthComponent {
  Highcharts: typeof Highcharts = Highcharts;
  heightOptions: Highcharts.Options = {
    plotOptions: {
      line: {
        lineWidth: 4
      }
    },
    yAxis: {
      title: {
        text: 'cm'
      }
    },
    xAxis: {
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      title: {
        text: 'Month'
      }
    },
    title: {
      text: 'Height Growth'
    },
    accessibility: {
      enabled: false
    },
    caption: {
      text: 'This graph represents the patient`s height growth in centimeters, the pink line shows normal height growth while the red line represents the patient`s monthly recorded growth'
    },
    series: [
      {
        name: 'Normal Height',
        data: [50, 54, 57, 60, 62, 64, 66, 67, 69, 70.2, 71.5, 73, 74],
        type: 'spline',
        color: '#FCB5AC'
      },
      {
        name: 'Patient Height',
        data: [51, 57, 61, 63],
        type: 'spline',
        color: '#F23D24'
      }
    ]
  };

  weightOptions: Highcharts.Options = {
    plotOptions: {
      line: {
        lineWidth: 4
      }
    },
    yAxis: {
      title: {
        text: 'kg'
      }
    },
    xAxis: {
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      title: {
        text: 'Month'
      }
    },
    title: {
      text: 'Weight Growth'
    },
    caption: {
      text: 'This graph represents the patient`s weight growth in kilograms, the light green line shows normal weight growth while the dark green line represents the patient`s monthly recorded growth'
    },
    accessibility: {
      enabled: false
    },
    series: [
      {
        name: 'Normal Weight',
        data: [3.2, 4.2, 5.2, 5.8, 6.5, 6.9, 7.3, 7.7, 8.0, 8.2, 8.5, 8.7, 9.0],
        type: 'spline',
        color: '#B5E5CF'
      },
      {
        name: 'Patient Weight',
        data: [3.1, 4.2, 5.2, 5.7],
        type: 'spline',
        color: '#3D5B59'
      }
    ]
  };
  bmiCalculated: number = 0;
  constructor() { }

  ngOnInit() {
    this.bmiCalculated = 5.7 / (63 * 63 / 10000);

  }

  roundBMI(bmi: number): string {
    return this.bmiCalculated.toFixed(2);
  }

}
