import { Component, OnInit } from '@angular/core';
import { ExamDirectoryService } from 'src/services/exam-directory.service'
import { Summary } from 'src/models/summary';
import { UserService } from 'src/services/user.service'
import { ExamDirectory } from 'src/models/examDirectory';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exam-directory',
  templateUrl: './exam-directory.component.html',
  styleUrls: ['./exam-directory.component.scss']
})
export class ExamDirectoryComponent implements OnInit {

  
  examDirectories:ExamDirectory[];
  summaries:Summary[];
  directoryId:string;
  

  constructor(private examDirectoryService: ExamDirectoryService ,private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.summaries = [];
    this.getExamDirectories();
  }

  getExamDirectories(){
    this.userService.getUserExamDirectories().then((json)=> {
      console.log(json);
      this.examDirectories = json.exam_direcoties;
    })
   
    }
    getExamDirectory(directoryId:string){
      this.examDirectoryService.getExamDirectory(directoryId).then(json=>{
        this.summaries=json.data.summaries;
      })
    }
    openDirectory(directoryId:string){
      this.router.navigate(['/directory',directoryId]);

    }
  
}
