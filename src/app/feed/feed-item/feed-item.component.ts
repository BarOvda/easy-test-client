import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/models/summary';
import { Card } from "../../../models/card";
import * as AOS from 'aos';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/services/file.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/services/user.service';
import { ExamDirectory } from 'src/models/examDirectory';
import { ExamDirectoryService } from 'src/services/exam-directory.service';
// import * as AWS from 'aws-sdk';

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
  icons:string[]=[];
  private fileId: string;
  constructor(private http: HttpClient, private router: Router
    , private route: ActivatedRoute
    , private fileService: FileService,private userService:UserService,private directoryService:ExamDirectoryService) { }
  
  ngOnInit(): void {
    this.url = this.summary.pathUrl;
    if(this.userService.user.examsDirectories.filter(directory=> directory.courseId===this.summary.courseAppearance).length!=0){
      console.log("tr");
      this.icons.push("favorite");
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
    this.router.navigate(['/file',this.summary._id]);
  }
  addToDirectory(){
          //this.directoryService.addFileToExamDirectory()

  }

}
