import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { PatientService } from '../../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  appointments: Appointment[] = [];
  appointmentsToday: Appointment[] = [];

  appointmentCount: number = 0;
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.getAppointments();

  }

  getAppointments() {
    this.patientService.getAppointments()
      .subscribe(appointments => {
        if (appointments) {
          this.appointments = appointments;
          this.filterAppointments();
        }
      });
  }

  filterAppointments() {
    const today = new Date().toISOString().slice(0, 10); // Get today's date in 'YYYY-MM-DD' format
    this.appointmentsToday = this.appointments.filter(appointment => appointment.date === today);
    this.appointmentCount = this.appointmentsToday.length;
  }

  goToAppointment(patient: Appointment) {
    this.router.navigate(['/patient-dashboard', patient.patientId])
  }

}


