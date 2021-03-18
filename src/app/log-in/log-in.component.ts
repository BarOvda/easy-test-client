import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  serverErr: string;
  isValid: boolean = true;
  loginForm = this.fb.group({
    email: ['', { validators: [Validators.required, Validators.email] }

    ],
    password: ['', { validators: [Validators.required, Validators.minLength(5)] }],
  });



  constructor(private service: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLogIn() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    console.log("yes");
    this.isValid = true;
    this.service.login(email, password).catch((err: HttpErrorResponse) => {
      console.log('An error occurred:', err.error);
      this.serverErr = err.error.message;
      this.isValid = false;
    }).then(() => {
      if (this.isValid)
        this.gotoHome();
    });


  }

  gotoHome() {
    this.router.navigate(['/home']);
  }




}
