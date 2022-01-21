import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.scss'],
})
export class RandomUserListComponent implements OnInit {
  genderData = [
    {
      id: 'male',
      name: 'male',
    },
    {
      id: 'female',
      name: 'female',
    },
  ];
  selectedGender;
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
  selectedNat: string[];

  constructor() {
    this.nationalities.forEach((nat, index) => {
      this.nationalityData.push({
        id: nat,
        name: nat,
      });
    });
  }

  onNationalityChange(event){
    console.log(event)
    console.log(this.selectedNat)
  }
  onGenderChange(event){
    console.log(event)
    console.log(this.selectedGender)
  }
  ngOnInit(): void {}
}
