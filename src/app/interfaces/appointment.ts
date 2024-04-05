export interface Appointment {
    patientId: number;
    patientName: string;
    recordTypeId: number,
    date: string; // Assuming date is represented as a string in 'YYYY-MM-DD' format
    time: string; // Assuming time is represented as a string in 'HH:MM' format
}
