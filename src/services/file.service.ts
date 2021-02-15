import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Summary } from 'src/models/summary';

@Injectable({
 providedIn: 'root'
})
export class FileService {
  public currentFileDisplied:Summary;

 constructor(private http: HttpClient,private cookieServise: CookieService) { }


 public uploadFile(data,courseAppId:string): Promise<any> {//,courseAppID: string
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
  const options = { headers: headers};
  //console.log(data);
  return this.http.put<any>(`${environment.apiUrl}/summaries/upload/${courseAppId}`
  ,data,options
  )       
  .toPromise()
  .then(json=>{
    console.log(json);
  });
}

public rateFile(rank:string,fileId:string): Promise<any> {//,courseAppID: string
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
  const options = { headers: headers};
  return this.http.put<any>(`${environment.apiUrl}/summaries/rank/${fileId}`
  ,{rank:rank},options
  )       
  .toPromise()
  .then(json=>{
    console.log(json);
  });
}
}