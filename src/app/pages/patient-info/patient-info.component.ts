import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patients.service';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrl: './patient-info.component.scss'
})
export class PatientInfoComponent {
  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }
  editMode: boolean = false;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  allergies = [
    'Peanut',
    'Dairy',
    'Gluten',
    'Shellfish',
    'Soy',
    'Egg',
    'Fish',
    'Tree Nut',
    'Wheat',
    'Corn',
    'Sesame',
    'Latex',
    'Mold',
    'Dust Mites',
    'Pet Dander',
    'Pollen',
    'Insect Stings',
    'Medications',
    'Other'
  ]

  patientId: any;
  patientInfo: Patient = {
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
    },
    Patients: []
  };
  patients?: Patient[];

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

  // findPatientById(patientList: any) {
  //   for (const patient of patientList) {
  //     if (patient.id === Number(this.patientId)) {
  //       this.patientInfo = patient;
  //       console.log(this.patientInfo)
  //       break;
  //     }
  //   }
  // }

  changeEditMode(): void {
    this.editMode = !this.editMode;
    if (this.accordion && typeof this.accordion.openAll === 'function') {
      this.accordion.openAll();
    }
  }

  backToPatientDash() {
    this.router.navigate(['/patient-dashboard', this.patientId])
  }
}
