import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password:string;
  isValidDetails: Boolean;

  constructor(private cookieService:CookieService,private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isValidDetails = true;
  }
  
  onSubmitLogIn() {
    this.isValidDetails = true;
    
    this.service.login(this.email,this.password).catch((err: HttpErrorResponse) => {
      console.log('An error occurred:', err.error);
      this.isValidDetails = false;
    }).then(()=>{
      if(this.isValidDetails)
        this.gotoUserList();
    });
    
  }

  gotoUserList() {
    this.router.navigate(['/feed']);
  }

  isValidEmailCheack() { return this.isValidDetails }



}
