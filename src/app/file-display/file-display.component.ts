import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Summary } from 'src/models/summary';
import { FileService } from 'src/services/file.service';

@Component({
  selector: 'app-file-display',
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.scss'],
  providers: [NgbRatingConfig]

})
export class  FileDisplayComponent implements OnInit {
  url:string;
  ctrl = new FormControl(null, Validators.required);
  rating:number;
  summary:Summary;


  constructor(private config:NgbRatingConfig,private fileService:FileService) {
    this.config.max = 5;
   }

  ngOnInit(): void {
    this.summary = this.fileService.currentFileDisplied;
    

    this.ctrl.setValue(-1);
    console.log(this.summary);
    this.rating = -1;
    
   
    this.url =this.summary.pathUrl;
    console.log(this.url);


    this.ctrl.valueChanges.subscribe(rate => {
     console.log(rate);
     
     if(this.rating!=-1){
      this.config.readonly =true;
      this.fileService.rateFile(this.rating.toString(),"60231f98f035292b00e95ad1");
     }

    });
  }
  
rated(){
  if(this.rating<0)
    return false;
    return true;
  }

}
