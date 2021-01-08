import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/*import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';*/
import { HeaderComponent } from './header/header.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './exams/exam-list/exam-list.component'
import { ExamItemComponent } from './exams/exam-list/exam-item/exam-item.component'
//import { ReactiveFormsModule } from '@angular/forms';

//import { MytestsComponent } from './mytests/mytests.component';
//import { TestListComponent } from './mytests/test-list/test-list.component';
//import { MyTestsComponent } from './my-tests/my-tests.component';
//import { TestListComponent } from './test-list/test-list.component';
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
    SignUpComponent
    //MytestsComponent,
    //TestListComponent,
    //MyTestsComponent,
    //TestListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  //  ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
