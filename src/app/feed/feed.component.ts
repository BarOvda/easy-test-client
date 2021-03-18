import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/course';
import { Summary } from 'src/models/summary';
import { FeedService } from 'src/services/feed.service';
import { SummaryService } from 'src/services/summary.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  selected: any;
  summaries: Summary[] = [];
  searchKeyWord: string;
  followedCourses: Course[];
  searchedCourseId: string;
  searchedCourseName: string;

  constructor(private feedService: FeedService
    , private userService: UserService, private service: SummaryService) { }



  ngOnInit(): void {
    this.summaries = [];
    console.log(this.userService.user);
    this.followedCourses = this.userService.user.followedCourses;
    console.log(this.followedCourses);
    this.getFeed();
  }
  getFeed() {

    this.feedService.getFeed().then(json => {
      this.summaries = json.data;
    });

  }
  onSearchSummary() {
    this.service.searchForAFile(this.searchKeyWord, this.searchedCourseId).then(json => {
      this.summaries = json.results;
    })
  }
  onValChange(course: Course) {
    // console.log(course);

    if (this.searchedCourseId === course._id) {
      this.resetCourseFilter();
      console.log("reset")
    }
    else {
      this.searchedCourseId = course._id;
      this.searchedCourseName = course.name;
    }
    if (this.searchedCourseId === undefined && this.searchKeyWord === undefined) {
      this.getFeed();
      return;
    }
    this.service.searchForAFile(this.searchKeyWord, this.searchedCourseId).then(json => {
      this.summaries = json.results;
    })
  }
  resetCourseFilter() {
    this.selected = null;
    this.searchedCourseName = undefined;
    this.searchedCourseId = undefined;

  }
  inputChange() {
    if (this.searchKeyWord === ''&&this.searchedCourseId != undefined) {
      this.resetCourseFilter();
      this.getFeed();
    }
  }

}
