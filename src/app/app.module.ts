import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './exams/exam-list/exam-list.component';
import { ExamItemComponent } from './exams/exam-list/exam-item/exam-item.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { SearchFilesComponent } from './search-files/search-files.component';
import { UserItemComponent } from './search-files/user-item/user-item.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchCoursesComponent } from './search-courses/search-courses.component';
import { CourseItemComponent } from './search-courses/course-item/course-item.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IgxDropDownModule, IgxButtonModule, IgxToggleModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    //ServerComponent,
    //ServersComponent,
    HeaderComponent,
    ExamsComponent,
   // ReactiveFormsModule,

    ExamDetailComponent,
    ExamListComponent,
    ExamItemComponent,
    LogInComponent,
    //DetailsComponent,
    MainLogoComponent,
    SearchFilesComponent,
    UserItemComponent,
    FileUploaderComponent,
    HomeComponent,
    SignUpComponent,
    SearchCoursesComponent,
    CourseItemComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    IgxDropDownModule,
	IgxButtonModule,
  IgxToggleModule,
  BrowserAnimationsModule,
  // MatButtonModule,
  // MatFormFieldModule,
  // MatInputModule,
  // MatRippleModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
