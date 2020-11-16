import { Component, OnInit } from '@angular/core';

import { GoogleApiService } from 'ng-gapi';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'vex-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  constructor ( 
    private route: ActivatedRoute,
    private gapiService: GoogleApiService,
    )
    {
      this.gapiService.onLoad().subscribe();
    }

     ngOnInit() {
      this.route.fragment.subscribe((fragment) => {
        console.log(fragment)
      })
    }
}
