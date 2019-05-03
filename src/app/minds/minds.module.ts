import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MindsRoutingModule } from './minds-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MindsRoutingModule
  ],
  exports: []
})
export class MindsModule { }
