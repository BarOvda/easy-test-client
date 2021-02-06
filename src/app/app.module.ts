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
import { SearchFilesComponent } from './search-files/search-files.component';
import { UserItemComponent } from './search-files/user-item/user-item.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchCoursesComponent } from './search-courses/search-courses.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IgxDropDownModule, IgxButtonModule, IgxToggleModule, IgxCardModule, IgxRippleModule, IgxIconModule } from "igniteui-angular";
import { NgxPaginationModule } from 'ngx-pagination';
import { FeedComponent } from './feed/feed.component';
import {MatIconModule} from "@angular/material/icon";
import { ReactiveFormsModule} from '@angular/forms';
import {
  // MatButtonModule,
  // MatFormFieldModule,
  
  // MatInputModule,
  // MatListModule,
  // MatSelectModule,
  // MatSidenavModule,
  MatCardModule,
  
  //MatTableModule
} from "@angular/material/card";
import { FollowedCoursesListComponent } from './followed-courses-list/followed-courses-list.component';
import { FeedItemComponent } from './feed/feed-item/feed-item.component';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
// import { MatLabel } from '@angular/material/form-field/label';
// import { MatFormField } from '@angular/material/form-field';
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
    SearchFilesComponent,
    UserItemComponent,
    HomeComponent,
    SignUpComponent,
    SearchCoursesComponent,

    FileUploadComponent,
    FeedComponent,
    FollowedCoursesListComponent,
    FeedItemComponent
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
  NgxPaginationModule,
  MatCardModule,
  MatIconModule,
  ReactiveFormsModule,
  IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule

  // MatFormField,
  // MatLabel,
  
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
