import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/models/course';
import { CourseService } from 'src/services/course.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-followed-courses-list',
  templateUrl: './followed-courses-list.component.html',
  styleUrls: ['./followed-courses-list.component.css']
})
export class FollowedCoursesListComponent implements OnInit {
  isSpinner:boolean
  

  courses: Course[] = [];
  page: number =1;
  totalItems:number;
  itemsPerPage:number = 5;
  searchValue:string;
  name: string;
  followedCourses:boolean[];

  constructor(private courseService: CourseService,private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.isSpinner = true;
    console.log("follow");
    this.reloadData(this.page);
  }


  async followCourse(coureId:string){
    await this.userService.unFollowCourse(coureId);
    this.reloadData(1);
  }
  async onSearchCourse() {
    const searchResults = this.courseService
  }
  reloadData(page:number) {
    this.courses = [];

    this.courseService.getFollowedCourses(this.page.toString(),this.itemsPerPage.toString()).then((json) => {
      this.courses = json.courses;
      this.page = +json.current_page;
      this.totalItems = +json.total_items;
      this.itemsPerPage = +json.items_per_page;
      console.log(this.totalItems);
      this.isSpinner = false;

    });
 }
  handlePageChange(event) {
    this.page = event;
    this.reloadData(this.page);

  }
 
}
