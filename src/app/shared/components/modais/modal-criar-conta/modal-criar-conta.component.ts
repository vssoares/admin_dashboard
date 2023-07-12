import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
@Component({
   selector: 'app-modal-criar-conta',
   templateUrl: 'modal-criar-conta.component.html',
   standalone: true,
   imports: [MatDialogModule, CommonModule],
})
export class ModalCriarContaComponent {
   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
