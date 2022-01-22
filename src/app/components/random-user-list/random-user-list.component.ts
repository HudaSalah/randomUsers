import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { RandomUsers } from 'src/app/models/random-users';
import { User } from 'src/app/models/user';
import { DOCUMENT } from '@angular/common';
import { Router, UrlSerializer } from '@angular/router';
@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.scss'],
})
export class RandomUserListComponent implements OnInit {
  isloading = true;
  genderData: Array<object> = [];
  selectedGender;
  nationalityData: Array<object> = [];
  selectedNat: Array<string> = [];
  columnsData = [];
  selectedColumns: Array<string> = [];

  randomUsersList: User[] = [];

  constructor(
    private ApiService: ApiService,
    private dataService: DataService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private serializer: UrlSerializer
  ) {
    this.genderData = dataService.getGender();
    this.nationalityData = dataService.getNationalities();
    this.columnsData = dataService.getColumns();
    this.selectedColumns = dataService.getColumns().map((x) => x.id);
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
    //by default user profile image should be displayed
    const includes = [...this.selectedColumns, 'picture'].join(',');

    const tree = this.router.createUrlTree([], {
      queryParams: {
        results: '9',
        gender: this.selectedGender,
        nat: selectedNationality,
        inc: includes,
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
        let result = res as RandomUsers;
        if (append) {
          //for infinity scrolling
          let newRes = result.results as User[];
          this.randomUsersList.push(...newRes);
        } else {
          this.randomUsersList = result.results as User[];
        }
        this.isloading = false;
      },
      (err) => {
        console.log(err)
      }
    );
  }

  // infinity scrolling
  onScrollDown(ev: any) {
    this.getRandomUsersList(true);
  }

  ngOnInit(): void {
    this.getRandomUsersList();
  }
}
