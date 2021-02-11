import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/models/summary';
import { Card } from "../../../models/card";
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { FileService } from 'src/services/file.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {
  @Input() summary:Summary;  
   card:Card;
   currentRate:number;
  url:string;

  constructor(private router: Router,private fileService:FileService) { }

  ngOnInit(): void {

    let postFix = this.summary.pathUrl.split("\\")[2];
   
    this.url =`http://127.0.0.1:8887/${postFix}`;

    this.currentRate = this.summary.rank;
    console.log(this.summary.pathUrl);
    AOS.init({
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800,
      debounceDelay: 50,
      once: false,  // values from 0 to 3000, with step 50ms
      mirror: true, // whether elements should animate out while scrolling past them

    });

    this.card  = new Card(
      ["read more"],"simaster A 2019", ["favorite"], "http://127.0.0.1:8887/An_Intelligent_Auto_Parking_System_for_Vehicles%20(1).pdf"
      , this.summary.title,
      this.summary.title
  );
  }
  showFile(){
    this.fileService.currentFileDisplied = this.summary;
    this.router.navigate([`/file`]);
  }

}
