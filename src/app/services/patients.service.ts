import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';
import { Appointment } from '../interfaces/appointment';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private appointmentsUrl = 'assets/patients/appointments.json';
    private backendUrl = 'http://127.0.0.1:8000';

    constructor(private http: HttpClient) { }

    getPatients(): Observable<any> {
        return this.http.get<any>(`${this.backendUrl}/all_patients`);
    }

    getPatient(patintId: number): Observable<Patient> {
        return this.http.get<Patient>(`${this.backendUrl}/patient/${patintId}`);
    }

    updatePatient(patient: Patient): Observable<Patient> {
        return this.http.put<Patient>(`${this.backendUrl}/patient/${patient.id}`, patient);
    }

    deletePatient(patintId: number): Observable<Patient> {
        return this.http.delete<Patient>(`${this.backendUrl}/patient/${patintId}`);
    }

    getAppointments(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(this.appointmentsUrl);
    }
}
