import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/models/summary';
import { Card } from "../../../models/card";
import * as AOS from 'aos';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/services/file.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamDirectoryService } from 'src/services/exam-directory.service';
import { ExamDirectory } from 'src/models/examDirectory';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {
  @Input() summary: Summary;
  @Input() directory: ExamDirectory;
  
  card: Card;
  currentRate: number;
  url: string;
  private fileId: string;
  constructor(private http: HttpClient,
    private directoryService: ExamDirectoryService,
    private _snackBar: MatSnackBar
    , private router: Router
    , private route: ActivatedRoute, private fileService: FileService) { }

  ngOnInit(): void {
    console.log(this.directory);
    console.log(this.summary);
    this.url = this.summary.pathUrl;

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

    this.card = new Card(
      ["read more"], "simaster A 2019", ["favorite"], this.url
      , this.summary.title,
      this.summary.title
    );
  }
  showFile() {
    this.fileService.currentFileDisplied = this.summary;
    this.router.navigate(['/file', this.summary._id]);
  }
  removeFromDirectory() {
    const directoryId = this.summary
    this.directoryService.removeFileFromExamDirectory(this.directory._id, this.summary._id)
      .then(json => {
        this._snackBar.open("The File Deleted Successfuly!",
          "close", {
          duration: 2000
        });
      })

  }
}
