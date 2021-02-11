import { Component, OnInit } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { Summary } from 'src/models/summary';
import { FeedService } from 'src/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  summaries:Summary[];
  constructor(private feedService:FeedService) { }

  ngOnInit(): void {
    this.summaries = [];
    this.getFeed();
  }
   getFeed(){

    this.feedService.getFeed().then(json=> {
      this.summaries = json.data;
    });

  }

}
