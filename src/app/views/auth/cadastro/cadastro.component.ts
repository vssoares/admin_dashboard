import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;

  modalRef: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit() {}

  criarConta() {
    this.formulario.markAllAsTouched();
  }

  validarCampo(campo: FormControl) {
    return !campo.valid && campo.touched;
  }

  aplicarErro(campo: string) {
    return this.validarCampo(this.formulario.get(campo) as FormControl);
  }
}
