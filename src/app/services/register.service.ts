import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod'
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiURL = environment.apiURL;
  constructor(private http:HttpClient) { }

  register(user:User):Observable<any>{
    return this.http.post<User>(`${this.apiURL}users`, user);
  }

  show():Observable<any>{
    return this.http.get<User>(`${this.apiURL}read`);
  }
}
