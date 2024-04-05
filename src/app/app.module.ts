import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Angular Material Modules start here
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

// Angular Material Modules end here

// ngx-charts

// Pages start here
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientListingComponent } from './pages/patient-listing/patient-listing.component';
import { MyCalendarComponent } from './pages/my-calendar/my-calendar.component';
import { DashboardActionCardComponent } from './components/dashboard-action-card/dashboard-action-card.component';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';

// Pages end here



// Components start here
import { HeaderComponent } from './components/header/header.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientPhotoComponent } from './components/patient-photo/patient-photo.component';
import { LineChartModule } from '@swimlane/ngx-charts';
import { PatientNoteComponent } from './pages/patient-note/patient-note.component';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';


// COmponents end here

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientListingComponent,
    MyCalendarComponent,
    DashboardActionCardComponent,
    PatientInfoComponent,
    HeaderComponent,
    PatientDashboardComponent,
    PatientPhotoComponent,
    PatientNoteComponent,
    CreateAppointmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatTabsModule,
    MatDividerModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatListModule,
    LineChartModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
