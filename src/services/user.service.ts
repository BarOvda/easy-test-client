import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;
  token:string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }


  public login(email: string,password:string): Promise<any> {
    return this.http.post<User>(`${environment.apiUrl}/users/login`,{email:email,password:password})
    .toPromise()
    .then(json=>{
      this.user = json["user"];
      this.token = json["token"];
      console.log(this.token);
    });
  }
  public check(email: string): Promise<any> {
    
    return this.http.get<User>("http://localhost:8091/users/login").toPromise();
  }



}