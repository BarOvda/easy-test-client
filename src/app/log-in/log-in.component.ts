import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password:string = '12345';
  isValidEmail: Boolean;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isValidEmail = true;
  }

  onSubmitLogIn() {
    this.isValidEmail = true;

    this.service.login(this.email,this.password).catch((err: HttpErrorResponse) => {
      console.log('An error occurred:', err.error);
      this.isValidEmail = false;
    }).then(()=>{
      if(this.isValidEmail)
        this.gotoUserList();
    });
    
  }

  gotoUserList() {
    this.router.navigate(['/feed']);
  }

  isValidEmailCheack() { return this.isValidEmail }

}
