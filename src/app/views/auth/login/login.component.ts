import { Component, inject } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
})
export class LoginComponent {
   formulario: FormGroup;
   modalRef: any;

   service = inject(AuthService);
   router = inject(Router);

   msgErro = '';

   constructor(private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
         email: ['', Validators.required],
         password: ['', Validators.required],
      });

      this.formulario.valueChanges.subscribe(() => {
         this.msgErro = '';
      });
   }

   login() {
      this.formulario.markAllAsTouched();

      if (!this.formulario.valid) return;

      this.service.login(this.formulario.value).subscribe({
         next: response => {
            this.service.setToken(response.access_token);
            this.router.navigate(['dashboard/']);
         },
         error: ({ error }) => {
            this.msgErro = Array.isArray(error.message)
               ? error?.message[0]
               : error?.message;
         },
      });
   }

   validarCampo(campo: FormControl) {
      return !campo.valid && campo.touched;
   }

   aplicarErro(campo: string) {
      return this.validarCampo(this.formulario.get(campo) as FormControl);
   }
}
