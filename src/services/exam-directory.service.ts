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
    constructor(private http: HttpClient,private cookieServise: CookieService) {
 
    }
    public async createExamDirectory(data,courseAppId:string): Promise<any>{
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
        const options = { headers: headers};
        // PUT /exam-directories/upload/:courseId ,HEADER Authentication : token
        return this.http.put<any>(`${environment.apiUrl}/exam-directories/upload/${courseAppId}`
        ,data,options
        )       
        .toPromise()
        .then(json=>{
          console.log(json);
        });
      }

      public async uploadFileToExamDirectory(data, directoryId:string,summaryId:string ): Promise<any>{
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
        const options = { headers: headers};
      //// PUT  /exam-directories/upload-summary/{directoryId}/{summaryId}
      //router.put('/upload-summary/:directoryId/:summaryId',isAuth, examDirectoriesController.addFileToDirectory);//TESTED
        return this.http.put<any>(`${environment.apiUrl}/upload-summary/${directoryId}/${summaryId}`
        ,data,options)
        .toPromise()
        .then(json=>{
          console.log(json);
        });
      }

      public async getExamDirectory(directoryId:string):Promise<any>{
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
        const options = { headers: headers};
        // GET /exam-directories/{directoryId}
        return this.http.get<any>(`${environment.apiUrl}/exam-directories/${directoryId}`,options)
        .toPromise()
        .then(json=>{
            console.log(json);
        });
      }
}   