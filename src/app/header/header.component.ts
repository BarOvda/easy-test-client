import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { User } from 'src/models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  collapsed = true;
  imagePath: string;
  headerEmail: string;
  fileSearch: string;
  user: User;

  @Output() messageEvent = new EventEmitter<string>();


  constructor(private service: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  getLoggedUser() {

    const isAuth = this.cookieService.check("user");
    if (isAuth) {
      // console.log("---header")
      this.user = this.service.user;
      return true;
    } else {
      return false;
    }
  }
  sendMessage() {
    this.messageEvent.emit("sec")
  }

  logOut() {
    console.log("Log Out");
    this.cookieService.delete("user");
    this.cookieService.delete("token");
    this.router.navigate(['/']);
  }


}