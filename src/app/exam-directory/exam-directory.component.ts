import { Component, OnInit } from '@angular/core';
import { ExamDirectoryService } from 'src/services/exam-directory.service'
import { Summary } from 'src/models/summary';
import { UserService } from 'src/services/user.service'
import { ExamDirectory } from 'src/models/examDirectory';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-exam-directory',
  templateUrl: './exam-directory.component.html',
  styleUrls: ['./exam-directory.component.scss']
})
export class ExamDirectoryComponent implements OnInit {
  isSpinner:boolean;

  examDirectories: ExamDirectory[] = [];
  summaries: Summary[];
  directoryId: string;
  examDate: string;
  remakeDate: string;


  constructor(public datepipe: DatePipe, private examDirectoryService: ExamDirectoryService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isSpinner = true
    this.summaries = [];
    this.getExamDirectories();
  }

  getExamDirectories() {
    this.userService.getUserExamDirectories().then((json) => {
      console.log(json);
      this.examDirectories = json.exam_direcoties;
      this.examDirectories.forEach(dic => {
       dic.courseId.exams.exam =this.datepipe.transform(dic.courseId.exams.exam, 'yyyy-MM-dd hh:mm');
       dic.courseId.exams.remake =this.datepipe.transform(dic.courseId.exams.remake, 'yyyy-MM-dd hh:mm');
      });
      this.isSpinner = false

    })
  }
  getExamDirectory(directoryId: string) {
    this.examDirectoryService.getExamDirectory(directoryId).then(json => {
      this.summaries = json.data.summaries;
    })
  }
  openDirectory(directoryId: string) {
    this.router.navigate(['/directory', directoryId]);

  }

}
