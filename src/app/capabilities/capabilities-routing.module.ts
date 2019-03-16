import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamesComponent } from './names/names.component';
import { StatusesComponent } from './statuses/statuses.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // {path: '', component: ListComponent},
  {
    path: 'capabilities', component: ListComponent,
    children: [
      { path: "names", component: NamesComponent },
      { path: "statuses", component: StatusesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapabilitiesRoutingModule { }
