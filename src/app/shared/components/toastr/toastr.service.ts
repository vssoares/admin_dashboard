import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
constructor() { }

  msgCode = {
    'danger': {
      color: 'red',
    },
    'success': {
      color: 'green',
    },
    'warning': {
      color: 'yellow' ,
    },
  };

  private exibir = new BehaviorSubject<any>(null);
  exibir$ = this.exibir.asObservable();

  success(mensagem: string) {
    console.log(mensagem);
    this.exibir.next({mensagem, options: this.msgCode.success});
  }

  danger(mensagem: string) {
    this.exibir.next({mensagem, options: this.msgCode.danger});
  }

}
