import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { env } from 'src/app/shared/environments/environments';
import { AuthService } from '../auth/auth.service';

@Injectable({
   providedIn: 'root',
})
export class DashboardService {
   api = env.API;

   authService = inject(AuthService);

   constructor(private http: HttpClient) {}

   getContas() {
      const { id } = this.authService.getDecodeToken();
      const headers = this.authService.getHeaders();
      return this.http.get(`${this.api}account`, { headers, params: { id } });
   }
}
