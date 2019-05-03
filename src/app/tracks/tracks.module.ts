import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, AddComponent],
  imports: [
    CommonModule,
    TracksRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class TracksModule { }

