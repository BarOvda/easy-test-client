import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Summary } from 'src/models/summary';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { SummaryService } from 'src/services/summary.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.scss']

})
export class RateDialogComponent {
  url: string;
  ctrl = new FormControl(null, Validators.required);

  rating: number;
  summary: Summary;
  fileId: string;

  constructor(private config: NgbRatingConfig
    , private service: SummaryService
    , private _snackBar: MatSnackBar,

    public dialogRef: MatDialogRef<RateDialogComponent>, @Inject(MAT_DIALOG_DATA)
    data
  ) {
    this.config.max = 5;
    this.fileId = data.fileId

  }
  newRate(): void {
    this.service.rateFile(this.rating.toString(), this.fileId).then(json => {
      if (json == null) {
        this._snackBar.open("You Have Already Rated The Summary!",
          "close", {
          duration: 2000
        });
      } else {
        this._snackBar.open("Thanks For Your Rating!",
          "close", {
          duration: 2000
        });
      }
    }).catch(err => {
      console.log(err)
      this._snackBar.open("There Was An Error with Your Rate!",
        "close", {
        duration: 2000
      });
    });
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
