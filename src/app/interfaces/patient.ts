export interface Patient {
    Patients: Patient[];
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    photoLink: string;
    physicalDetails:
    {
        gender: string;
        ageOfGestation: number;
        birthWeight: number;
        birthLength: number;
        headCircumference: number;
        chestCircumference: number;
        abdomenCircumference: number;
        newbornScreening: string;
        bloodType: string;
        knownAllergies: string[];
        perinatalHistory: string;
        dateOfBirth: string;
        timeOfBirth: string;
    };
    parentDetails: {
        motherDetails: {
            firstName: string;
            lastName: string;
            age: number;
            occupation: string;
            contactNumber: string;
            emailAddress: string;
        };
        fatherDetails: {
            firstName: string;
            lastName: string;
            age: number;
            occupation: string;
            contactNumber: string;
            emailAddress: string;
        };
        homeDetails: {
            address: string;
            homeAddress: string;
        }
    }
}