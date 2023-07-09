import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/app/shared/environments/environments';
import { Login } from 'src/app/shared/interfaces/login';
import jwt_decode from 'jwt-decode';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   api = env.API;
   constructor(private http: HttpClient) {}

   login({ email, password }: Login): Observable<any> {
      return this.http.post(`${this.api}auth/login`, { email, password });
   }

   setToken(token: string) {
      localStorage.setItem('token', token);
   }

   getToken() {
      return localStorage.getItem('token');
   }

   getDecodeToken(): any {
      const token = this.getToken();
      if (!token) return null;
      return jwt_decode(token);
   }

   logout() {
      localStorage.removeItem('token');
   }
}
