import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/models/course';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  Follow() {
    this.userService.followCourse(this.course._id).then((data) => {
      console.log(data);
    })



  }
}
