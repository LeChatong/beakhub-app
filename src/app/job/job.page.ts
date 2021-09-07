import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-job',
  templateUrl: 'job.page.html',
  styleUrls: ['job.page.scss'],
})
export class JobPage {

  constructor(private router: Router) {}

  onLoadAppareil(name: String){
    this.router.navigate(['/details', name])
  }

}
