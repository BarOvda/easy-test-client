import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from 'src/models/course';
import { CourseService } from 'src/services/course.service';
import { FileService } from 'src/services/file.service';
import { UserService } from 'src/services/user.service';
import { map,startWith } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  myControl = new FormControl();
  options: Course[]=[];
  filteredOptions: Observable<Course[]>;


 form: FormGroup;
 error: string;
uploadResponse = { status: '', message: '', filePath: '' };
 public courses:Course[]=[];
   // Inject service  
 constructor(private fileService:FileService,private formBuilder: FormBuilder,private userService: UserService,private courseService:CourseService) { } 

 ngOnInit(): void { 

  

  this.courseService.getAllCourses().then((json) => {
    this.courses = json.courses;

    let i;
    for(i=0;i<this.courses.length;i++){
      this.options.push(this.courses[i]);
    }
    console.log("the course"+this.courses);})
    
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
    
    map(value => this._filter(value))
    );
    
    this.form = this.formBuilder.group({
      summary: ['']
    });
 } 

 private _filter(value: string): Course[] {
   
  const filterValue = value.toLowerCase();
  console.log(filterValue);
  let result = [];
  this.options.forEach(course=>{
    if(course.name.toLowerCase().includes(filterValue))
      result.push(course);
  })
  
  return result;
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

  this.fileService.uploadFile(formData).then(res=>{
     this.uploadResponse = res;
  }).catch(err=>{
    this.error = err
  });
}

getCourse(course){
  console.log(course._id);
                                                                                                                                                                                                                                                                                                                                   
  
}
public valueMapper = (key) => {
  console.log(key);
  let selection = this.courses.find(e => e.name === key.name);
  if (selection)
    return selection.name;
};
}
