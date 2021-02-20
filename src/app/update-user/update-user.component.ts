import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  form: FormGroup;

  user: User;
  isValid: Boolean = true;

  constructor(private service: UserService, private router: Router,private formBuilder: FormBuilder) {
    this.user = new User();
  }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      image: ['']
    });
  }
  async onSubmit() {
    this.isValid = true;
    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    formData.append('name', this.user.name);
    formData.append('password', this.user.password);
    try{
    const result = await this.service.updateUsersDetailes(formData);
    this.goTOHomePage();
    }catch(err){
      console.log(err);
      this.isValid=false;
    }
  }

  isValidForm() { return this.isValid; }

  goTOHomePage(){
    this.router.navigate(['/feed']);
  }
  
onFileChange(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.form.get('image').setValue(file);
    console.log(this.form.get('image'));
  }
}


}
