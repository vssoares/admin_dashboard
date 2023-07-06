import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'src/app/shared/components/toastr/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  modalRef: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  } 
  ngOnInit() {}
  
  login() {
    this.formulario.markAllAsTouched();
    this.toastr.success('Login efetuado com sucesso!');
    if (this.formulario.valid) {
      console.log('Login efetuado com sucesso!');
    }
  }

  validarCampo(campo: FormControl) {
    return !campo.valid && campo.touched;
  }

  aplicarErro(campo: string) {
    return this.validarCampo(this.formulario.get(campo) as FormControl);
  }
}