import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {

  name: string;

  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    console.log('start');
    this.name = this.route.snapshot.params['name'];
    console.log(this.name)
  }

}
