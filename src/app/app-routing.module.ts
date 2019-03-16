import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './minds/register/register.component';
import { AddComponent } from './tracks/add/add.component';
import { ListComponent } from './capabilities/list/list.component';

const routes: Routes = [
  {path:'minds', component:RegisterComponent},
  {path:'tracks', component:AddComponent},
  {path:'capabilities',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
