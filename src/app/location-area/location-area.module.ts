import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationAreaRoutingModule } from './location-area-routing.module';
import { LocationAreaDetailComponent } from './location-area-detail/location-area-detail.component';
import { LocationAreaListComponent } from './location-area-list/location-area-list.component';


@NgModule({
  declarations: [
    LocationAreaListComponent,
    LocationAreaDetailComponent
  ],
  imports: [
    CommonModule,
    LocationAreaRoutingModule
  ]
})
export class LocationAreaModule { }
