import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  Follow() {


   


  }
}