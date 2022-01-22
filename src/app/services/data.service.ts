import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getColumns() {
    return [
      { id: 'gender', name: 'Gender' },
      { id: 'name', name: 'Name' },
      { id: 'location', name: 'Location' },
      { id: 'email', name: 'Email' },
      { id: 'registered', name: 'Registered' },
      { id: 'dob', name: 'Date of birth' },
      { id: 'phone', name: 'Phone' },
      { id: 'nat', name: 'Nationality' },
    ];
  }

  getGender() {
    return [
      { id: 'male', name: 'Male' },
      { id: 'female', name: 'Female' },
    ];
  }

  getNationalities() {
    return [
      { id: 'AU', name: 'Australian' },
      { id: 'BR', name: 'Brazil' },
      { id: 'CA', name: 'Canada' },
      { id: 'CH', name: 'Switzerland' },
      { id: 'DE', name: 'Germany' },
      { id: 'DK', name: 'Denmark' },
      { id: 'ES', name: 'Spain' },
      { id: 'FI', name: 'Finland' },
      { id: 'FR', name: 'France' },
      { id: 'GB', name: 'United Kingdom' },
      { id: 'IE', name: 'Ireland ' },
      { id: 'IR', name: 'Iran' },
      { id: 'NL', name: 'Netherlands' },
      { id: 'NZ', name: 'New Zealand' },
      { id: 'TR', name: 'Turkey' },
      { id: 'US', name: 'United States' },
    ];
  }
}
