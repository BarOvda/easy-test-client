import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    console.log(cookieServise.get("user"));

   if(cookieServise.check("user")){

    //console.log(cookieServise.get("user"));
    //this.user = cookieServise.get("user");
   // cookieServise.delete("user");
      this.user = JSON.parse(cookieServise.get("user"));  
      //Object.assign(this.user,cookieServise.get("user"));
   }
   }


  public login(email: string,password:string): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/login`,{email:email,password:password})
    .toPromise()
    .then(json=>{
      this.user = json["user"];
      this.cookieServise.set("user",json["user"]);
      this.cookieServise.set("token",json["token"]);
    });
  }
  public check(email: string): Promise<any> {
    
    return this.http.get<User>("http://localhost:8091/users/login").toPromise();
  }

  public logOut(){
    this.cookieServise.delete("user");
    this.cookieServise.delete("token");
  }

}