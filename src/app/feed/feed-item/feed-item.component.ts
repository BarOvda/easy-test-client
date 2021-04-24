import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/models/summary';
import { Card } from "../../../models/card";
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { SummaryService } from 'src/services/summary.service';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {
  @Input() summary: Summary;
  card: Card;
  currentRate: number;
  url: string;
  icons: string[] = [];

  constructor(private router: Router

    , private fileService: SummaryService, private userService: UserService) { }

  ngOnInit(): void {
    this.url = this.summary.pathUrl;
    if (this.userService.user.examsDirectories
      .filter(directory => directory.courseId._id === this.summary.courseAppearance._id).length != 0) {
    }

    this.currentRate = this.summary.rank;
    AOS.init({
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800,
      debounceDelay: 50,
      once: false,  // values from 0 to 3000, with step 50ms
      mirror: true, // whether elements should animate out while scrolling past them

    });

    this.card = new Card(
      ["read more"], "simaster A 2019", this.icons, this.url
      , this.summary.title,
      this.summary.title
    );
  }
  showFile() {
    this.fileService.currentFileDisplied = this.summary;
    console.log("yesss");
    this.router.navigate(['/file', this.summary._id]);
  }
  addToDirectory() {
    //this.directoryService.addFileToExamDirectory()

  }

}
