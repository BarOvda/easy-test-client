import { BrowserModule } from '@angular/platform-browser';
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
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatCardModule} from "@angular/material/card";
import { FollowedCoursesListComponent } from './followed-courses-list/followed-courses-list.component';
import { FeedItemComponent } from './feed/feed-item/feed-item.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LandPageComponent } from './land-page/land-page.component';
import { NgModule } from '@angular/core';
import { FileDisplayComponent } from './file-display/file-display.component';
import { SafePipe } from './helpers/SafePipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    //ServerComponent,
    //ServersComponent,
    HeaderComponent,
    ExamsComponent,
   // ReactiveFormsModule,
   SafePipe,
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
    FeedItemComponent,
    LandPageComponent,
    FileDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule ,
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
	IgxRippleModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
  
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
