import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../models/course';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) {
 
   }


  public async getAllCourses(page:string): Promise<any> {
    const params = new HttpParams().set("page",page);
    const result = 
     await this.http.get<any>(`${environment.apiUrl}/courses/all-courses`,{params:params})
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