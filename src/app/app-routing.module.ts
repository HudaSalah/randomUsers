import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomUserListComponent } from './components/random-user-list/random-user-list.component';
const routes: Routes = [
  {
    path: '',
    component: RandomUserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
