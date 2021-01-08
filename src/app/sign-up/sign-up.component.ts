import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 
  user: User;
  userElement: Element;
  isValidEmail: Boolean;

  constructor(private service: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    
  }

  onSubmitRegi() {


  }

  isValidEmailCheack() { return this.isValidEmail; }

}


