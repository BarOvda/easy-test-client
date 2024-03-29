import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service'
import {Course} from '../../../models/course'
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.scss']
})
export class SearchCoursesComponent implements OnInit {
  courses: Course[] = [];
  isSpinner:boolean

  page: number =1;
  totalItems:number;
  itemsPerPage:number = 5;
  searchValue:string;
  name: string;
  followedCourses:boolean[];

  constructor(private courseService: CourseService,private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.isSpinner = true
    this.reloadData(this.page);
  }


  async followCourse(coureId:string){
    await this.userService.followCourse(coureId);
    this.reloadData(1);
  }
  async onSearchCourse() {
    const searchResults = this.courseService.searchCourseByKeyWord(this.searchValue).then(json=>{
      this.courses = json.courses;
      console.log(json.courses);
      this.page = +json.current_page;
      this.totalItems = +json.total_items;
      this.itemsPerPage = +json.items_per_page;
    })
  }
  reloadData(page:number) {
    this.courses = [];

    this.courseService.getUnFollowedCourses(this.page.toString(),this.itemsPerPage.toString()).then((json) => {
      this.courses = json.courses;

      console.log(json.courses);
      this.page = +json.current_page;
      this.totalItems = +json.total_items;
      this.itemsPerPage = +json.items_per_page;
      console.log(this.page);
      this.isSpinner = false
      // this.courses.forEach(function (course){
      //   document.getElementById("btn-"+course._id).innerHTML = document.getElementById("btn-"+course._id)
      //   .innerHTML == "Disable" ? "Enable" : "Disable";
      // });

    });
 }
  handlePageChange(event) {
    this.page = event;
    this.reloadData(this.page);

  }
 
}
