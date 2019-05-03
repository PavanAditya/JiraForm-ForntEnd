import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MindsRoutingModule } from './minds-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MindsRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class MindsModule { }
