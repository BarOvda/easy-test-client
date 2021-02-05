import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../models/course';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient,private cookieServise: CookieService) {
 
   }


  public async getAllCourses(page:string,perPage:string): Promise<any> {
    let httpParams = new HttpParams().set("page",page).set("per_page",perPage);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const httpOptions = {
      headers: headers,
      params: httpParams
    };
    
    const result = 
     await this.http.get<any>(`${environment.apiUrl}/courses/all-courses`,httpOptions)
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