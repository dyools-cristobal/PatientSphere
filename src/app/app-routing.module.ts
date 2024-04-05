import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientListingComponent } from './pages/patient-listing/patient-listing.component';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientGrowthComponent } from './pages/patient-growth/patient-growth.component';
import { PatientNoteComponent } from './pages/patient-note/patient-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patient-list', component: PatientListingComponent },
  { path: 'patient-dashboard/:id', component: PatientDashboardComponent },
  { path: 'patient-info/:id', component: PatientInfoComponent },
  { path: 'patient-growth/:id', component: PatientGrowthComponent },
  { path: 'patient-note/:id', component: PatientNoteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
