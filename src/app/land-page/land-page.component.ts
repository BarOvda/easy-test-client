import { Component, OnInit
   } from '@angular/core';
  
import * as AOS from 'aos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.scss']
})
export class LandPageComponent implements OnInit {
  message:string;

  constructor(private router: Router) { }

  receiveMessage($event) {
    this.message = $event

  }
  ngOnInit(): void {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800,
      debounceDelay: 50,
      once: false,  // values from 0 to 3000, with step 50ms
      mirror: true, // whether elements should animate out while scrolling past them

    });

  }


}
