import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Summary } from 'src/models/summary';
import { ExamDirectoryService } from 'src/services/exam-directory.service';
import { SummaryService } from 'src/services/summary.service';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';

@Component({
  selector: 'app-file-display',
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.scss'],
  providers: [NgbRatingConfig]

})
export class FileDisplayComponent implements OnInit {
  url: string;
  ctrl = new FormControl(null, Validators.required);
  rating: number;
  summary: Summary;
  fileId: string;
  private subscription: Subscription;

  constructor(private config: NgbRatingConfig
    , private router: Router, private route: ActivatedRoute
    , private fileService: SummaryService, private directoryService: ExamDirectoryService,public dialog: MatDialog) {
    this.config.max = 5;

    this.subscription = route.parent.params.subscribe(
      (param: any) => this.fileId = param['id']
    );
    this.fileService.getFilesFullDetailes(this.fileId).then(json => {
      console.log(json);
      this.summary = json.summary;
      

      this.url = this.summary.pathUrl;
    });
  }

  ngOnInit(): void {

    console.log(this.fileId);


    this.ctrl.setValue(-1);
    console.log(this.summary);
    this.rating = -1;


    this.ctrl.valueChanges.subscribe(rate => {
      console.log(rate);

      if (this.rating != -1) {
        this.config.readonly = true;
        this.fileService.rateFile(this.rating.toString(), this.fileId);
      }

    });
  }

  rated() {
    if (this.rating < 0)
      return false;
    return true;
  }
  addFileToDirectory() {
    //this.directoryService.addFileToExamDirectory()
  }
  openDialog(){
    console.log("open dialog");
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(RateDialogComponent, 
      //dialogConfig
      {
      width: '300px',
      height:'250px',
      data: {fileId: this.fileId}
      
      });
    dialogRef.afterClosed().subscribe(rate => {
    console.log(rate);

    if (this.rating != -1) {
      this.config.readonly = true;
      this.fileService.rateFile(this.rating.toString(), this.fileId);
    }
  });
}

}
