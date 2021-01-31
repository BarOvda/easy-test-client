import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service'
import {Course} from '../../models/course'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent implements OnInit {
  courses: Course[] = [];
  page: number = 0;
  pages: number[] = [];
  searchValue:string;
  name: string;

  constructor(private courseService: CourseService, private router: Router) { }
  setPage(i: number, event: Event) {

    event.preventDefault();
    this.page = i;
    this.getCourses();

  }

  ngOnInit(): void {
    this.getCourses();
  }


  getCourses() {
    this.courses = [];
    this.pages = [];

    // this.router.queryParams.subscribe(params => {
    //   this.name = params.searchRecipe;
    // })
    console.log("here");

    this.courseService.getAllCourses(this.page.toString()).then((json) => {
      this.courses = json.courses;
      console.log("the course"+this.courses);
      // for (let i = 0; i < (parseInt(("" + (this.recipes.length / 10 + 1)))); i++) {
      //   this.pages.push(i);
      // }
    });
  }


  async onSearchCourse() {
    const searchResults = this.courseService
  }

}
