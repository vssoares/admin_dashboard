import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
   selector: 'app-modal-criar-conta',
   templateUrl: 'modal-criar-conta.component.html',
   standalone: true,
   imports: [
      MatDialogModule,
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
   ],
})
export class ModalCriarContaComponent {
   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
   }

   addConta() {
      console.log('add conta');
   }
}
