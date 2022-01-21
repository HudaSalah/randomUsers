import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RandomUsers } from 'src/app/models/random-users';
import { RandomUser } from 'src/app/models/random-user';
import { DOCUMENT } from '@angular/common';
import { HttpParams } from '@angular/common/http';
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
  randomUsersList: RandomUser[] = [];
  constructor(private ApiService: ApiService,@Inject(DOCUMENT) private document: Document) {
    this.nationalities.forEach((nat, index) => {
      this.nationalityData.push({
        id: nat,
        name: nat,
      });
    });
  }

  createDownloadLink(data: any) {
    let url = window.URL.createObjectURL(data);
    let a = this.document.createElement('a');
    a.href = url;
    a.download = 'randomUsersData';
    this.document.body.appendChild(a);
    a.click();
    this.document.body.removeChild(a);
  }

  exportFile(type){
    this.ApiService.downloadFile(`?results=9&format=${type}`
    ).subscribe(
      (res) => {
        this.createDownloadLink(res);
      },
      (err) => {
        // this.ApiService.redirectToNotFound();
      }
    );
  }

  onNationalityChange(event) {
    console.log(event);
    console.log(this.selectedNat);
  }
  onGenderChange(event) {
    console.log(event);
    console.log(this.selectedGender);
  }

  getRandomUsersList(gender?, nationality?) {
    this.ApiService.get(
      `?results=9&gender=${gender}&nat=${nationality}`
    ).subscribe(
      (res) => {
        console.log(res);
        let result = res as RandomUsers;
        this.randomUsersList = result.results as RandomUser[];
        console.log(this.randomUsersList);
      },
      (err) => {
        // this.ApiService.redirectToNotFound();
      }
    );
  }

  ngOnInit(): void {
    this.getRandomUsersList();
  }
}
