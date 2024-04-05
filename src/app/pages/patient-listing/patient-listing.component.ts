import { Component } from '@angular/core';
import { PatientService } from '../../services/patients.service';
import { Patient } from '../../interfaces/patient';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-listing',
  templateUrl: './patient-listing.component.html',
  styleUrl: './patient-listing.component.scss'
})
export class PatientListingComponent {
  patients: any;
  patientsDefaultOrder: Patient[] = [];
  subscription!: Subscription;
  sortBy: string = 'default';
  searchParam: string = '';


  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.subscription = this.patientService.getPatients()
      .subscribe(data => {
        if (data.Patients) {
          this.patients = data.Patients;
        } else {

        }
      }
      );
  }

  openPatientRecord(patient: Patient) {
    const patientId = patient.id
    this.router.navigate(['/patient-dashboard', patientId])
  }

  getGender(patientGender: string) {
    if (patientGender == 'Female') {
      return 'card-female'
    } else {
      return 'card-male'
    }
  }

  calculateAge(patientDOB: any): any {
    const today = new Date();
    const dob = new Date(patientDOB);

    let ageYears = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      ageYears--;
    }

    let months = today.getMonth() - dob.getMonth();
    if (months < 0) {
      ageYears--;
      months += 12; // Add 12 months to the negative value
    }

    if (ageYears >= 1) {
      return `${ageYears} y, ${months} m`;
    } else {
      return `${months} m`;
    }

  }

  rearrangePatients(sortBy: string): void {
    if (sortBy === 'firstName') {
      this.patients.sort((a: { firstName: string; }, b: { firstName: any; }) => a.firstName.localeCompare(b.firstName));
    } else if (sortBy === 'lastName') {
      this.patients.sort((a: { lastName: string; }, b: { lastName: any; }) => a.lastName.localeCompare(b.lastName));
    } else if (sortBy === 'gender') {
      // this.patients.sort((a, b) => a.physicalDetails.gender.localeCompare(b.physicalDetails.gender));
    } else {
      console.error('Invalid sorting option. Please provide "name" or "age".');
    }
  }

  searchPatients(): Patient[] {
    if (this.patients) {
      return this.patients.filter((patient: { firstName: string; lastName: string; physicalDetails: { gender: string; }; }) => {
        // Convert both name and gender to lowercase for case-insensitive search
        const fName = patient.firstName.toLowerCase();
        const lName = patient.lastName.toLowerCase();
        const gender = patient.physicalDetails.gender.toLowerCase();
        const term = this.searchParam.toLowerCase();
        // Check if the patient's name or gender contains the search term
        return fName.includes(term) || lName.includes(term) || gender.includes(term);
      });
    } else {
      return [];
    }
  }

  formatGender(gender: string): string {
    return gender.toLocaleLowerCase();
  }

}
