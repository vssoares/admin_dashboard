import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
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
    private modalService: ModalService
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit() {}

  criarConta() {
    console.log(this.formulario.value);
    this.formulario.markAllAsTouched();
  }

  validarCampo(campo: FormControl) {
    return !campo.valid && campo.touched;
  }

  abrirModal(template: TemplateRef<any>) {
    const modalOptions = {
      size: 'sm',
    };
    this.modalRef = this.modalService.open(template, modalOptions)

    this.modalRef.closeEvent.subscribe(() => {
      console.log(1);
    });

  }

  aplicarErro(campo: string) {
    return this.validarCampo(this.formulario.get(campo) as FormControl);
  }
}
