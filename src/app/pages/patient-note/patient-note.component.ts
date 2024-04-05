import { Component } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrl: './patient-note.component.scss'
})
export class PatientNoteComponent {

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
}
