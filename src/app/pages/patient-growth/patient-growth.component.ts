import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-patient-growth',
  templateUrl: './patient-growth.component.html',
  styleUrl: './patient-growth.component.scss',
})
export class PatientGrowthComponent {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  ngOnInit() { }
}
