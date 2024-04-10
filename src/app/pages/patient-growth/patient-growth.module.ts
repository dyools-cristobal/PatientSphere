import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PatientGrowthComponent } from './patient-growth.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    PatientGrowthComponent,
  ],
  imports: [HighchartsChartModule],
  providers: [],
  bootstrap: [PatientGrowthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientGrowthModule { }
