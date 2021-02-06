import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/models/summary';
import { Card } from "../../../models/card";

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {
  @Input() summary:Summary;  
   card:Card;


  constructor() { }

  ngOnInit(): void {
    this.card  = new Card(
      ["read more"],"simaster A 2019", ["favorite"], "http://127.0.0.1:8887/An_Intelligent_Auto_Parking_System_for_Vehicles%20(1).pdf"
      , this.summary.title,
      this.summary.title
  );
  }

}
