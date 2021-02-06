import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
 providedIn: 'root'
})
export class FeedService {
//  private fileList: string[] = new Array<string>();
//  private fileList$: Subject<string[]> = new Subject<string[]>();

 constructor(private http: HttpClient,private cookieServise: CookieService) { }
 public getFeed(): Promise<any> {//,courseAppID: string
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
  const options = { headers: headers};
  return this.http.get<any>(`${environment.apiUrl}/feed`,options
  )       
  .toPromise();
}
}