import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patients.service';
import { Patient } from '../../interfaces/patient';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent {
  patientId: number = 0;
  patientInfo: Patient = {
    Patients: [],
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    photoLink: '',
    physicalDetails: {
      gender: '',
      ageOfGestation: 0,
      birthWeight: 0,
      birthLength: 0,
      headCircumference: 0,
      chestCircumference: 0,
      abdomenCircumference: 0,
      newbornScreening: '',
      bloodType: '',
      knownAllergies: [],
      perinatalHistory: '',
      dateOfBirth: '',
      timeOfBirth: ''
    },
    parentDetails: {
      motherDetails: {
        firstName: '',
        lastName: '',
        age: 0,
        occupation: '',
        contactNumber: '',
        emailAddress: ''
      },
      fatherDetails: {
        firstName: '',
        lastName: '',
        age: 0,
        occupation: '',
        contactNumber: '',
        emailAddress: ''
      },
      homeDetails: {
        address: '',
        homeAddress: ''
      }
    }
  };
  constructor(private router: Router, private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = params['id'];
    });
    this.loadPatient();
  }

  loadPatient(): void {
    this.patientService.getPatient(this.patientId)
      .subscribe(patient => {
        this.patientInfo = patient
      });

  }

  openPatientInfo() {
    this.router.navigate(['/patient-info', this.patientId])
  }

  openPatientGrowth() {
    this.router.navigate(['/patient-growth', this.patientId])
  }
}
