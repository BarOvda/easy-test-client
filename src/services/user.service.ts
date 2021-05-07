import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private cookieServise: CookieService) {
    //cookieServise.delete("user");
    // cookieServise.delete("token");
    if (cookieServise.check("user")) {
      this.user = JSON.parse(cookieServise.get("user"));
    }
  }

  public signUp(data): Promise<any> {
    // console.log(data.getAll('name'));

    return this.http.put<any>(`${environment.apiUrl}/users/sign-up`, data)
      .toPromise()
      .then(json => {

        this.user = json["user"];
        this.cookieServise.set("user", JSON.stringify(json.user));
        this.cookieServise.set("token", json.token);
      });
  }
  public updateUsersDetailes(data): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };

    return this.http.put<any>(`${environment.apiUrl}/users/update-details`, data,options)
      .toPromise()
      .then(json => {

        this.user = json["user"];
        this.cookieServise.set("user", JSON.stringify(json.user));
      });
  }


  public login(email: string, password: string): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/login`, { email: email, password: password })
      .toPromise()
      .then(json => {
       // console.log(json.user);
        this.user = json["user"];
        console.log(this.user);
        this.cookieServise.set("user", JSON.stringify(json.user));
        this.cookieServise.set("token", json.token);
      });
  }

  public logOut() {
    this.cookieServise.delete("user");
    this.cookieServise.delete("token");
  }
  public followCourse(courseId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    return this.http.put<any>(`${environment.apiUrl}/users/follow-course/${courseId}`
      , null, options
    )
      .toPromise()
      .then(json => {
        this.user.followedCourses = json.user.followedCourses;
        this.cookieServise.set("user", JSON.stringify(this.user));

      });
  }
  public unFollowCourse(courseId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    return this.http.put<any>(`${environment.apiUrl}/users/unfollow-course/${courseId}`
      , null, options
    )
      .toPromise()
      .then(json => {
        this.user.followedCourses = json.user.followedCourses;
        this.cookieServise.set("user", JSON.stringify(this.user));

      });
  }
  // GET /users/directories
  //router.get('/directories/:userId',isAuth, usersController.getUserDirectories);
  public async getUserExamDirectories(): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    return this.http.get<any>(`${environment.apiUrl}/users/directories`, options).toPromise();
  }

}