import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExamDirectory } from 'src/models/examDirectory';
import { Summary } from 'src/models/summary';
import { ExamDirectoryService } from 'src/services/exam-directory.service';
@Component({
  selector: 'app-directory-contant',
  templateUrl: './directory-contant.component.html',
  styleUrls: ['./directory-contant.component.scss']
})
export class DirectoryContantComponent implements OnInit {
  isSpinner:boolean
  private subscription: Subscription;
  direcrtoryId: string;
  summaries: Summary[];
  directory: ExamDirectory;


  constructor(private route: ActivatedRoute, private directoryService: ExamDirectoryService
  ) {
    this.subscription = route.params.subscribe(
      (param: any) => this.direcrtoryId = param['id']
    );

  }

  ngOnInit(): void {

    this.isSpinner = true

    this.summaries = []
    this.getDirectory();

  }
  async getDirectory() {
    try {
      const json = await this.directoryService.getExamDirectory(this.direcrtoryId);
      this.directory = json.directory;
      this.summaries = json.directory.summaries;
      console.log(this.summaries);
    } catch (err) {
      console.log(err);
    }
    this.isSpinner = false
  }
  get childRefreshDirectory(){
    return this.getDirectory.bind(this);
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.directoryService.uploadFileToDirectory(this.direcrtoryId, file).then(json => {
        this.getDirectory();
      })


    }
  }
  getFile() {
    console.log("clicked")
    document.getElementById("upfile").click();
  }

}
