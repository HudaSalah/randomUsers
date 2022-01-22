import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RandomUsers } from 'src/app/models/random-users';
import { RandomUser } from 'src/app/models/random-user';
import { DOCUMENT } from '@angular/common';
import { Router, UrlSerializer } from '@angular/router';
@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.scss'],
})
export class RandomUserListComponent implements OnInit {
  isloading = true ;
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
  selectedNat: string[] = [];
  randomUsersList: RandomUser[] = [];
  constructor(
    private ApiService: ApiService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private serializer: UrlSerializer
  ) {
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

  createParams(type?) {
    // get defined params (if param != undefined)
    let selectedNationality: string;
    if (this.selectedNat != undefined && this.selectedNat.length > 0) {
      selectedNationality = this.selectedNat.toString();
    }
    const tree = this.router.createUrlTree([], {
      queryParams: {
        results: '9',
        gender: this.selectedGender,
        nat: selectedNationality,
        format: type,
      },
    });
    let params = this.serializer.serialize(tree);
    return params;
  }

  exportFile(type) {
    let params = this.createParams(type);
    this.ApiService.downloadFile(params).subscribe(
      (res) => {
        this.createDownloadLink(res);
      },
      (err) => {
        // this.ApiService.redirectToNotFound();
      }
    );
  }

  getRandomUsersList(append?) {
    let params = this.createParams();
    this.ApiService.get(params).subscribe(
      (res) => {
        console.log(res);
        let result = res as RandomUsers;
        if(append){
          //for infinity scrolling
          let newRes  = result.results as RandomUser[];
          this.randomUsersList.push(...newRes)
        }else{
         this.randomUsersList = result.results as RandomUser[];
        }
        console.log(this.randomUsersList);
        this.isloading = false;
      },
      (err) => {
        // this.ApiService.redirectToNotFound();
      }
    );
  }


  // infinity scrolling
  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    this.getRandomUsersList(true);
  }

  ngOnInit(): void {
    this.getRandomUsersList();
  }
}
