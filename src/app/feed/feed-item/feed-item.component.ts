import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/models/summary';
import { Card } from "../../../models/card";
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { FileService } from 'src/services/file.service';
import { HttpClient } from '@angular/common/http';
// import * as AWS from 'aws-sdk';

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

  constructor(private http: HttpClient,private router: Router,private fileService:FileService) { }

  ngOnInit(): void {
    // AWS.config.credentials = new AWS.Credentials({
    //   accessKeyId: 'AKIAIBJG6PTZRSMW2JSQ', secretAccessKey: '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'
    // });

    // const params = {
    //   Bucket: 'easy-test-s3',
    //   Key: 'files/1613356310142-exams2Fcourse90904-year2018-semester3-moed2.pdf'
    // };

    
    // let s3 = new AWS.S3();

    // s3.getObject(params, function(err, data) {
    //   if (err) {
    //     console.error(err); // an error occurred
    //   } else {
    //     const string = new TextDecoder('utf-8').decode(data.Body);
    //     console.log(da);
    //   }
    // });
    this.url =this.summary.pathUrl;
    
    //this.url =`http://127.0.0.1:8887/${postFix}`;

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
      ["read more"],"simaster A 2019", ["favorite"],  this.url
      , this.summary.title,
      this.summary.title
  );
  }
  showFile(){
    this.fileService.currentFileDisplied = this.summary;
    this.router.navigate([`/file`]);
  }

}
