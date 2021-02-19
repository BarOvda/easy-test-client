import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './exams/exam-list/exam-list.component';
import { LogInComponent } from './log-in/log-in.component'
import { SearchCoursesComponent } from './search-courses/search-courses.component'
import { SearchFilesComponent } from './search-files/search-files.component'
import { HomeComponent } from './home/home.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FollowedCoursesListComponent } from './followed-courses-list/followed-courses-list.component';
import { LandPageComponent } from './land-page/land-page.component';
import { FileDisplayComponent } from './file-display/file-display.component';
import { ExamDirectoryComponent } from 'src/app/exam-directory/exam-directory.component';
const appRoutes: Routes=[
    { path: 'feed',component: HomeComponent },
    { path: '',component: LandPageComponent },
    {path: 'courses',component: SearchCoursesComponent },
    {path: 'my-courses',component: FollowedCoursesListComponent },
    {path: 'file',component: FileDisplayComponent },
    { path: 'exams',component: ExamListComponent },
    { path: 'search-page', component: SearchFilesComponent },
    { path: 'exam-detail',component: ExamDetailComponent },
    { path: 'log-in',component: LogInComponent },
    { path: 'sign-up',component:SignUpComponent  },
    { path: 'upload-file', component: FileUploadComponent },
    { path: 'exam-directory', component: ExamDirectoryComponent},
    { path: '**', redirectTo: '/'}

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}