import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
    
})
export class HeaderComponent implements OnInit{
    collapsed = true;
    imagePath: string;
    headerEmail: string;
    fileSearch: string;
    
    @Output() messageEvent = new EventEmitter<string>();


    constructor(private service: UserService, private router: Router,private cookieService:CookieService) { }
  
    ngOnInit(): void {
    }
   sendMessage() {
    this.messageEvent.emit("sec")
  }
    emailName() {
      const isAuth = this.cookieService.check("user");
      if(isAuth){
        console.log(this.service.user.email);
         this.headerEmail = this.service.user.email;
       return true;
      }else{
        return false;
      }
    }
  
    onSearchFile() {
      this.router.navigate(['/search-page/'], { queryParams: { searchUsername: this.fileSearch } }).then(() => {
        this.fileSearch = '';
      });
    }
    logOut(){
      console.log("Log Out");
      this.cookieService.delete("user");
      this.cookieService.delete("token");
      this.router.navigate(['/']);
    }

}