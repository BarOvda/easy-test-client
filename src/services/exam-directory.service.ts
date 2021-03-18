import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../models/course';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ExamDirectoryService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private cookieServise: CookieService) {

  }
  public async createExamDirectory(data, courseAppId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    // PUT /exam-directories/upload/:courseId ,HEADER Authentication : token
    return this.http.put<any>(`${environment.apiUrl}/exam-directories/upload/${courseAppId}`
      , data, options
    )
      .toPromise()
      .then(json => {
        console.log(json);
      });
  }

  public async addFileToExamDirectory(directoryId: string, summaryId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };

    return this.http.put<any>(`${environment.apiUrl}/exam-directories/add-summary/${directoryId}/${summaryId}`
      , null, options)
      .toPromise()

  }


  public async removeFileFromExamDirectory(directoryId: string, summaryId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };

    return this.http.put<any>(`${environment.apiUrl}/exam-directories/remove-summary/${directoryId}/${summaryId}`
      , null, options)
      .toPromise()

  }

  


  public getExamDirectory(directoryId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    // GET /exam-directories/{directoryId}
    return this.http.get<any>(`${environment.apiUrl}/exam-directories/${directoryId}`, options)
      .toPromise()
    // .then(json=>{
    //     console.log(json);
    // });
  }



  public uploadFileToDirectory(directoryId: string, file): Promise<any> {

    let formData = new FormData();
    formData.append('file', file);
    formData.append('isPrivate','true');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    
    return this.http.put<any>(`${environment.apiUrl}/summaries/upload/directory/${directoryId}`, formData, options)
      .toPromise()

  }



}   