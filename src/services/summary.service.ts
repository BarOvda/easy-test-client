import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Summary } from 'src/models/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  public currentFileDisplied: Summary;

  constructor(private http: HttpClient, private cookieServise: CookieService) { }


  public uploadFile(data, courseAppId: string): Promise<any> {//,courseAppID: string
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    // const req = {data,isPrivate}
    //console.log(data);
    return this.http.put<any>(`${environment.apiUrl}/summaries/upload/${courseAppId}`,
      data, options
    )
      .toPromise();
    //console.log(json);
  }

  public async rateFile(rank: string, fileId: string): Promise<any> {//,courseAppID: string
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    const json = await this.http.put<any>(`${environment.apiUrl}/summaries/rank/${fileId}`,
      { rank: rank }, options
    )
      .toPromise();
    console.log(json);
  }

  public getFilesFullDetailes(fileId: string): Promise<any> {//,courseAppID: string
    let headers = new HttpHeaders();
    console.log(fileId);
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    return this.http.get<any>(`${environment.apiUrl}/summaries/${fileId}`,
      options
    )
      .toPromise();
    //console.log(json);
  }
  public searchForAFile(keyWord: string,courseId:string) {
    return this.http.post<any>(`${environment.apiUrl}/summaries/search/key-word`, { keyWord: keyWord,courseId:courseId })
      .toPromise();
  }
}