import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from 'src/models/course';
import { CourseService } from 'src/services/course.service';
import { FileService } from 'src/services/file.service';
import { UserService } from 'src/services/user.service';
import { map,startWith } from 'rxjs/operators';
import { CourseAppearance } from 'src/models/courseAppearance';
import { Router } from '@angular/router';
import { ExamDirectoryService } from 'src/services/exam-directory.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  myControl = new FormControl();
  
  options: Course[]=[];
  filteredOptions: Observable<Course[]>;

  appOptions: CourseAppearance[]=[];
  filteredOptionsApp: Observable<CourseAppearance[]>;
  

 form: FormGroup;
 error: string;
 
uploadResponse = { status: '', message: '', filePath: '' };
 public courses:Course[]=[];
  isDisabled: boolean;
  showAutocomplete: boolean = false;
  selectedCourseAppId: string;
   
 constructor(private router: Router,private fileService:FileService,private formBuilder: FormBuilder,private userService: UserService,private courseService:CourseService, private examDirectoryService:ExamDirectoryService) { } 

 ngOnInit(): void { 

  this.isDisabled = true;

  this.form = this.formBuilder.group({
    course: [''],
    courseApp: [''],
    summary: ['']
  });
  this.form.get('course').disable();

  this.courseService.getAllCourses().then((json) => {
    this.courses = json.courses;

    let i;
    for(i=0;i<this.courses.length;i++){
      this.options.push(this.courses[i]);
    }
    console.log("the course"+this.courses);})
    

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );

   
 } 

 files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }


 displayFn(course?: Course): string | undefined {
  return course ? course.name : undefined;
}
displayFnApp(courseApp?: CourseAppearance): string | undefined {
  return courseApp ? courseApp.name : undefined;
}

 private _filter(name: string): Course[] {

  const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}
private _filterApp(name: string): CourseAppearance[] {
  const filterValue = name.toLowerCase();
  
    return this.appOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}

getTitle(bookId: string) {
  return this.courses.find(book => book._id === bookId).name;
}

onFileChange(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.form.get('summary').setValue(file);
  }
}

onSubmit() {
  const formData = new FormData();
  formData.append('file', this.form.get('summary').value);
 // this.examDirectoryService.uploadFileToExamDirectory(formData,)
  this.fileService.uploadFile(formData,this.selectedCourseAppId).then(res=>{
    // this.uploadResponse = res;
    this.router.navigate(['/feed']);
  }).catch(err=>{
    this.error = err
  });
}

async getCourseApp(courseApp){
  this.selectedCourseAppId = courseApp._id;
}
async getCourse(course){
  this.showAutocomplete=false;

  const appearancesResults = await this.courseService.getAllCourseAppearances(course._id);
  this.appOptions.length=0;
  this.appOptions = appearancesResults.appearances;
  if(this.appOptions.length>0){
  this.showAutocomplete = true;
    } else {
   this.showAutocomplete = false;
    }
  console.log(this.appOptions);
  this.form.get('courseApp').setValue(this.appOptions);
  this.filteredOptionsApp = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterApp(name) : this.appOptions.slice())
    );
  
}


}
