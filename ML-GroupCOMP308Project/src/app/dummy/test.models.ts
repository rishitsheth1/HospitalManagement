import {Injectable} from '@angular/core';

@Injectable()
export class TestModel {

  public patient = [{
    id: 'patient1',
    name: 'Yash Patel',
    address: '17 Craters Avenue',
    email: 'yash@gmail.com',
    phone: '4678677678',
    nurseId: 'nurse1',
    isOnMedication: true,
    dateCreated: new Date('12/4/2018')
  }, {
    id: 'patient2',
    name: 'Vishvas Patel',
    address: '24 Marks Avenue',
    email: 'vishvas@gmail.com',
    phone: '6278231167',
    nurseId: 'nurse1',
    isOnMedication: true,
    dateCreated: new Date('12/6/2018')
  }, {
    id: 'pt3',
    name: 'John Doe',
    email: 'john@gmail.com',
    address: '4 Marks Avenue',
    phone: '6289081167',
    nurseId: 'nurse1',
    isOnMedication: false,
    dateCreated: new Date('12/6/2017')
  }];
  public nurse = [{
    id: 'nurse1'
  }];
  public motivationalMessage = [{
    id: '1',
    quote: 'Time is limited! Don\'t waste it in someone else\'s life',
    author: 'Steve Jobs',
    dateAdded: new Date('1/1/2017')
  }];
  public medications = [
    {
      id: 'medication1',
      patientId: 'patient1',
      name: 'Fever',
      date_start: new Date('1/1/16'),
      date_end: null,
      hasCompleted: false,
      checkups: [
        {
          date: new Date('2/2/16'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        },
        {
          date: new Date('1/2/16'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        }
      ]
    },
    {
      id: 'medication2',
      patientId: 'patient1',
      name: 'Cold',
      date_start: new Date('1/1/15'),
      date_end: new Date('2/2/15'),
      hasCompleted: true,
      checkups: [
        {
          date: new Date('2/2/15'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        },
        {
          date: new Date('1/2/15'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        }
      ]
    },
    {
      id: 'medication3',
      patientId: 'patient1',
      name: 'Flu',
      date_start: new Date('1/1/14'),
      date_end: new Date('2/2/14'),
      hasCompleted: true,
      checkups: [
        {
          date: new Date('2/2/14'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        },
        {
          date: new Date('1/2/14'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        }
      ]
    },
    {
      id: 'medication4',
      patientId: 'patient2',
      name: 'Flu',
      date_start: new Date('1/1/14'),
      date_end: null,
      hasCompleted: false,
      checkups: [
        {
          date: new Date('2/2/14'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        },
        {
          date: new Date('1/2/14'),
          bodyTemperature: 37,
          heartRate: 90,
          bloodPressure: 170,
          respiratoryRate: 100
        }
      ]
    }

  ];
  public alertMessage = [
    {
      id: '1',
      userId: 'patient1',
      nurseId: 'nurse1',
      from: 'Yash Patel',
      subject: 'This is alert',
      hasViewed: false,
      date: new Date('1/1/2018')
    }];
  constructor() {
  }
}
