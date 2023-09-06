import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;

  public get userValue(): User {
    return this.userSubject.value;
  }

  API_URL = `${environment.backend_api_url}`;

  constructor(private http: HttpClient) {
    localStorage.setItem('jwtToken', 'ThisIsAJWTToken');
  }

  // register(username: string, password: string) {
  //   return this.http.post<any>(`${this.API_URL}/register`, { username, password });
  // }

  // login(username: string, password: string) {
  //   return this.http.post<any>(`${this.API_URL}/login`, { username, password }).pipe(
  //     map(({ token }) => {
  //       let user: User = {
  //         username: username,
  //         token: token,
  //       };
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.userSubject.next(user);
  //       return user;
  //     })
  //   );
  // }

}