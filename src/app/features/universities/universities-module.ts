import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitiesRoutingModule } from './universities-routing-module';
import { FormsModule } from '@angular/forms';
import { UniversitiesList } from './components/universities-list/universities-list';


@NgModule({
  declarations: [
    UniversitiesList
  ],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    FormsModule
  ]
})
export class UniversitiesModule { }
