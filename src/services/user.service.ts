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
  user:User;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private cookieServise: CookieService) {
    //cookieServise.delete("user");
   // cookieServise.delete("token");
   if(cookieServise.check("user")){
      this.user = JSON.parse(cookieServise.get("user"));
    }
   }


  public login(email: string,password:string): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/login`,{email:email,password:password})
    .toPromise()
    .then(json=>{
      

      this.user = json["user"];
      this.cookieServise.set("user",JSON.stringify(json.user));
      this.cookieServise.set("token",json.token);
    });
  }
  public check(email: string): Promise<any> {
    
    return this.http.get<User>("http://localhost:8091/users/login").toPromise();
  }

  public logOut(){
    this.cookieServise.delete("user");
    this.cookieServise.delete("token");
  }
  public followCourse(courseId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers};
    return this.http.put<any>(`${environment.apiUrl}/users/follow-course/${courseId}`
    ,null,options
    )       
    .toPromise()
    .then(json=>{
      console.log(json);
    });
  }
  public unFollowCourse(courseId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers};
    return this.http.put<any>(`${environment.apiUrl}/users/unfollow-course/${courseId}`
    ,null,options
    )       
    .toPromise()
    .then(json=>{
      console.log(json);
    });
  }
 
}