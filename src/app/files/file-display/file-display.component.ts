import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Summary } from 'src/models/summary';
import { FileService } from 'src/services/file.service';

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

  constructor(private config: NgbRatingConfig, private router: Router, private route: ActivatedRoute, private fileService: FileService) {
    this.config.max = 5;

    this.subscription = route.parent.params.subscribe(
      (param: any) => this.fileId = param['id']
    );
  }

  ngOnInit(): void {
    // this.fileId = this.route.snapshot.params['id'];
    // this.route.parent.params.subscribe(params => {
    //   this.fileId = params['id'];
    //   console.log( params['id']);

    // })
    console.log(this.fileId);
    this.fileService.getFilesFullDetailes(this.fileId).then(json => {
      console.log("re");
      console.log(json);
      this.summary = json.summary;


      this.url = this.summary.pathUrl;
    });

    this.ctrl.setValue(-1);
    console.log(this.summary);
    this.rating = -1;

    console.log(this.url);


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

}
