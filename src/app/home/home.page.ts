import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";
import {JobPage} from "../job/job.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onGoToAppareils(){
    this.router.navigate(['job'])
  }
}
