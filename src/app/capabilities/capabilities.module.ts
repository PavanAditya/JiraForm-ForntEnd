import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CapabilitiesRoutingModule } from './capabilities-routing.module';
import { ListComponent } from './list/list.component';
import { NamesComponent } from './names/names.component';
import { StatusesComponent } from './statuses/statuses.component';

@NgModule({
  declarations: [ListComponent, NamesComponent, StatusesComponent],
  imports: [
    CommonModule,
    CapabilitiesRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [ListComponent, NamesComponent, StatusesComponent]
})
export class CapabilitiesModule { }

