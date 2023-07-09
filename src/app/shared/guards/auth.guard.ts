import { inject } from '@angular/core';
import {
   ActivatedRouteSnapshot,
   CanActivateFn,
   Router,
   RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/views/auth/auth.service';

export const AuthGuard: CanActivateFn = (
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
) => {
   const service = inject(AuthService);
   const router = inject(Router);

   const user = service.getDecodeToken();

   if (user?.exp * 1000 < Date.now() || !user) {
      router.navigate(['auth/login'], {
         queryParams: {
            return: state.url,
         },
      });
   }

   return true;
};
