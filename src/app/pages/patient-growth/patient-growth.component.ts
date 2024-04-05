import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-patient-growth',
  templateUrl: './patient-growth.component.html',
  styleUrl: './patient-growth.component.scss'
})
export class PatientGrowthComponent {
  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 }
  ]
  ctx: any;
  canvas: any;
  @ViewChild('mychart') mychart: any;

  ngOnInit() { }
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Acquisitions by year',
            data: [10, 20, 30, 35, 45, 65],
            borderColor: '#007ee7',
          },
          {
            label: 'Acquisitions by year',
            data: [10, 20, 30, 35, 45, 65],
            borderColor: '#007ea7',
          }],
        labels: ['1', '2', '3', '4', '5', '6']
      }
    }
    );
  }
}
