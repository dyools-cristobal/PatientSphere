import { HighchartsChartModule } from "highcharts-angular";
import { PatientGrowthComponent } from "./patient-growth.component";
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
    declarations: [
        PatientGrowthComponent
    ],
    imports: [
        HighchartsChartModule
    ],
    providers: [
    ],
    bootstrap: [PatientGrowthComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientGrowthModule { }