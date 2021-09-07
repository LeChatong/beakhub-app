import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPage } from './job.page';
import {JobDetailsPage} from "./job-details/job-details.page";

const routes: Routes = [
  {
    path: '',
    component: JobPage,
  },
  {
    path: 'details',
    component: JobDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPageRoutingModule {}
