import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
 providedIn: 'root'
})
export class FileService {
 private fileList: string[] = new Array<string>();
 private fileList$: Subject<string[]> = new Subject<string[]>();

 constructor(private http: HttpClient,private cookieServise: CookieService) { }

 public upload(fileName: string, fileContent: string): void {
   this.fileList.push(fileName);
   this.fileList$.next(this.fileList);
 }

 public download(fileName: string): void {

 }

 public remove(fileName): void {
   this.fileList.splice(this.fileList.findIndex(name => name === fileName), 1);
   this.fileList$.next(this.fileList);
 }

 public list(): Observable<string[]> {
   return this.fileList$;
 }

 private addFileToList(fileName: string): void {
   this.fileList.push(fileName);
   this.fileList$.next(this.fileList);
 }
 public uploadFile(courseAppID: string): Promise<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
  const options = { headers: headers};
  return this.http.put<any>(`${environment.apiUrl}/summaries/upload${courseAppID}`
  ,null,options
  )       
  .toPromise()
  .then(json=>{
    console.log(json);
  });
}
}