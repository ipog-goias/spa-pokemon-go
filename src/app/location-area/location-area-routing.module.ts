import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationAreaListComponent } from './location-area-list/location-area-list.component';
import { LocationAreaDetailComponent } from './location-area-detail/location-area-detail.component';

const routes: Routes = [
  {
    path: '', component: LocationAreaListComponent
  },
  {
    path: 'detail', component: LocationAreaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationAreaRoutingModule { }
