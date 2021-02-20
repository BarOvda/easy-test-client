import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../models/course';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { data } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient,private cookieServise: CookieService) {
 
   }

   public async getAllCourses(): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const httpOptions = {
      headers: headers
    };
    
    const result = 
     await this.http.get<any>(`${environment.apiUrl}/courses/all`,httpOptions)
    .toPromise();
     return result;
  }
  public async getAllCourseAppearances(courseId:string): Promise<any> {
    const result = 
     await this.http.get<any>(`${environment.apiUrl}/courses/all-appearances/${courseId}`)
    .toPromise();
    console.log(result);
     return result;
  }
  public async getUnFollowedCourses(page:string,perPage:string): Promise<any> {
    let httpParams = new HttpParams().set("page",page).set("per_page",perPage);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const httpOptions = {
      headers: headers,
      params: httpParams
    };
    
    const result = 
     await this.http.get<any>(`${environment.apiUrl}/courses/allcourses`,httpOptions)
    .toPromise();
     return result;
  }
  public async getFollowedCourses(page:string,perPage:string): Promise<any> {
    let httpParams = new HttpParams().set("page",page).set("per_page",perPage);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const httpOptions = {
      headers: headers,
      params: httpParams
    };
    
    const result = 
     await this.http.get<any>(`${environment.apiUrl}/courses/followed-courses`,httpOptions)
    .toPromise();
     return result;
  }
  public async searchCourseByKeyWord(keyWord:string): Promise<any> {
    const result =  
     await this.http.post<any>(`${environment.apiUrl}/courses/search/key-word`,keyWord)
    .toPromise();
     return result;

  }
 
}