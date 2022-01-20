import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.scss'],
})
export class RandomUserListComponent implements OnInit {
  genderData = [
    {
      id: '0',
      name: 'male',
    },
    {
      id: '1',
      name: 'female',
    },
  ];
  selectedGender: any;
  nationalities = [
    'AU',
    'BR',
    'CA',
    'CH',
    'DE',
    'DK',
    'ES',
    'FI',
    'FR',
    'GB',
    'IE',
    'IR',
    'NL',
    'NZ',
    'TR',
    'US',
  ];
  nationalityData: Array<object> = [];
  selectedNat: any;

  constructor() {
    this.nationalities.forEach((nat, index) => {
      this.nationalityData.push({
        id: index,
        name: nat,
      });
    });
  }

  ngOnInit(): void {}
}
