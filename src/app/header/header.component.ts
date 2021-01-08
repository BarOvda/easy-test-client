import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';



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
    
    constructor(private service: UserService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    emailName() {
      if(this.service.user){
         this.headerEmail = this.service.user.email;
         console.log("true");
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

}