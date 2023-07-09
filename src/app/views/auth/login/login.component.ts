import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  modalRef: any;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  } 
  ngOnInit() {}
  
  login() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      
    }
  }

  validarCampo(campo: FormControl) {
    return !campo.valid && campo.touched;
  }

  aplicarErro(campo: string) {
    return this.validarCampo(this.formulario.get(campo) as FormControl);
  }
}