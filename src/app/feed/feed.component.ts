
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
  isSpinner: boolean
  summaries: Summary[] = [];
  searchKeyWord: string = null;
  followedCourses: Course[];
  searchedCourse: Course = null;
  isEmptyFeed: boolean
  constructor(private feedService: FeedService
    , private userService: UserService, private service: SummaryService) { }



  ngOnInit(): void {
    this.isSpinner = true;
    this.summaries = [];

    this.followedCourses = this.userService.user.followedCourses;
    this.getAllFeed();

  }


  getAllFeed() {
    this.isEmptyFeed = false;
    this.feedService.getFeed().then(() => {

      console.log(this.feedService.all_feed)
      this.feedService.all_feed.forEach(element => {

        this.summaries.push(element)

      })
      if (this.summaries.length == 0)
        this.isEmptyFeed = true
      this.isSpinner = false



    }).catch(err => {
      console.log(err)
      this.isEmptyFeed = true
      this.isSpinner = false

    });

  }
  onSearchSummary() {
    this.summaries = []
    this.feedService.all_feed.forEach(element => {
      this.summaries.push(element)
    })



    if (this.searchedCourse != null && this.searchedCourse != undefined)
      this.addCourseFilter(this.searchedCourse)
    if (this.searchKeyWord == "" || this.searchKeyWord == null || this.searchKeyWord == undefined) {


    } else {
      var to_pull_out = []
      this.summaries.forEach(sum => {
        if (!sum.title.includes(this.searchKeyWord)) {
          to_pull_out.push(sum);
        }

      })
      to_pull_out.forEach(pull => {
        if (this.summaries.includes(pull))
          this.summaries.splice(this.summaries.indexOf(pull), 1);
      })
    }
    if (this.summaries.length == 0)
      this.isEmptyFeed = true
  }
  onValChange(course) {
    // console.log(course)
    if (this.searchedCourse == null || this.searchedCourse == undefined) {

      this.addCourseFilter(course);
      return;
    }
    else if (this.searchedCourse == course) {

      this.resetCourseFilter();
      return;

    } else {
      this.addCourseFilter(course);

    }
    if (this.summaries.length == 0)
      this.isEmptyFeed = true


  }
  addCourseFilter(course) {
    this.searchedCourse = course
    this.summaries = [];
    // console.log(course)
    this.feedService.all_feed.forEach(sum => {
      // console.log(sum)
      if (sum.courseAppearance.couresId == course)
        this.summaries.push(sum)
    })

  }
  resetCourseFilter() {
    this.searchedCourse = null;
    this.summaries = this.feedService.all_feed;
    if (this.searchKeyWord != null && this.searchKeyWord != undefined) {

    }
  }

}


