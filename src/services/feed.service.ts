import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Summary } from 'src/models/summary';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  all_feed: Summary[] = null;

  constructor(private http: HttpClient, private cookieServise: CookieService) { }
  public getFeed(): Promise<any> {//,courseAppID: string
    this.all_feed = null
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    return this.http.get<any>(`${environment.apiUrl}/feed`, options
    )
      .toPromise().then(json=>{
        this.all_feed = json.data
      });
  }
}