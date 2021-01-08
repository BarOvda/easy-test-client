import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-files',
  templateUrl: './search-files.component.html',
  styleUrls: ['./search-files.component.css']
})
export class SearchFilesComponent implements OnInit {
  searchResult: User[] = [];
  element: Element;
  page: number = 0;
  pages: number[] = [];
  user: string;

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  setPage(i: number, event: Event) {

    event.preventDefault();
    this.page = i;
    this.getUsersByUsername();
  }

  ngOnInit(): void {
    this.getUsersByUsername();
  }

  getUsersByUsername() {

    this.searchResult = [];
    this.pages = [];


    
  }
}