import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { JobPage } from './job.page';

import { JobPageRoutingModule } from "./job-routing.module";
import {JobDetailsPage} from "./job-details/job-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPageRoutingModule
  ],
  declarations: [JobPage, JobDetailsPage]
})
export class JobPageModule {}
