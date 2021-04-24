import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Bool } from 'aws-sdk/clients/clouddirectory';
import { Subscription } from 'rxjs';
import { Summary } from 'src/models/summary';
import { ExamDirectoryService } from 'src/services/exam-directory.service';
import { SummaryService } from 'src/services/summary.service';
import { UserService } from 'src/services/user.service';
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
  isDiractoryButtonVisible: Bool = false;

  constructor(private config: NgbRatingConfig
    , private router: Router, private route: ActivatedRoute,
    private userService: UserService
    , private _snackBar: MatSnackBar

    , private fileService: SummaryService, private directoryService: ExamDirectoryService, public dialog: MatDialog) {
    this.config.max = 5;

    this.subscription = route.parent.params.subscribe(
      (param: any) => this.fileId = param['id']
    );
    this.fileService.getFilesFullDetailes(this.fileId).then(json => {
      console.log(json);
      this.summary = json.summary;
      if (this.summary.courseAppearance.students.includes(userService.user._id)) {
        this.isDiractoryButtonVisible = true;

      }

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
    let attachedDic;
    this.userService.user.examsDirectories.forEach(dic => {
      if (dic.courseId._id === this.summary.courseAppearance._id)
        attachedDic = dic._id;
    })
    this.directoryService.addFileToExamDirectory(attachedDic, this.summary._id).then(json => {

      this._snackBar.open("The file added succesfuly!",
        "close", {
        duration: 2000
      });

    }).catch(err => {
      this._snackBar.open("The file is already in your directory.",
        "close", {
        duration: 2000
      });
    });
  }
  openDialog() {
    console.log("open dialog");
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(RateDialogComponent,
      //dialogConfig
      {
        width: '300px',
        height: '250px',
        data: { fileId: this.fileId }

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
