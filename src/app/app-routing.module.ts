import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './exams/exam-list/exam-list.component';
import { LogInComponent } from './log-in/log-in.component'
import { SearchCoursesComponent } from './courses/search-courses/search-courses.component'
import { SearchFilesComponent } from './search-files/search-files.component'
import { HomeComponent } from './home/home.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FollowedCoursesListComponent } from './courses/followed-courses-list/followed-courses-list.component';
import { LandPageComponent } from './land-page/land-page.component';
import { ExamDirectoryComponent } from 'src/app/exam-directory/exam-directory.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './helpers/auth.guard';
import { CoursesComponent } from './courses/courses.component';
import { FilesComponent } from './files/files.component';
import { FileDisplayComponent } from './files/file-display/file-display.component';
import { DirectoryItemComponent } from './exam-directory/directory-item/directory-item.component';
import { DirectoryContantComponent } from './exam-directory/directory-contant/directory-contant.component';

const appRoutes: Routes = [

    { path: '', redirectTo: "home",pathMatch: "full" }
    , { path: 'home', component: HomeComponent
  //  , canActivate: [AuthGuard] 
}
    , { path: 'land-page', component: LandPageComponent }
    ,{ path: 'log-in', component: LogInComponent }
    

    , {
        path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]
        , children: [
            { path: "", redirectTo: "search", pathMatch: "full" },
            { path: 'followed-courses', component: FollowedCoursesListComponent },
            { path: 'search', component: SearchCoursesComponent },
        ]
    }

    , {
        path: 'file/:id', component: FilesComponent, canActivate: [AuthGuard]
        , children: [
            { path: "", redirectTo: "display", pathMatch: "full" },
            { path: 'display', component: FileDisplayComponent },
        ]
    },

    { path: 'exams', component: ExamListComponent },
    { path: 'search-page', component: SearchFilesComponent },
    { path: 'exam-detail', component: ExamDetailComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'updeate-users-details', component: UpdateUserComponent },
    { path: 'upload-file', component: FileUploadComponent },
    { path: 'directory', component: ExamDirectoryComponent },
    { path: 'directory/:id', component: DirectoryContantComponent },

    { path: '**', redirectTo: 'home' }

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}