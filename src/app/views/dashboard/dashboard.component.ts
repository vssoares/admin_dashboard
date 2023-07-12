import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCriarContaComponent } from 'src/app/shared/components/modais/modal-criar-conta/modal-criar-conta.component';

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
   service = inject(DashboardService);

   constructor(public dialog: MatDialog) {}

   ngOnInit() {
      this.getContas();
   }

   getContas() {
      this.service.getContas().subscribe({
         next: (res: any) => {
            if (!res.accounts.length) {
               this.openModalConta();
            }
         },
      });
   }
   openModalConta() {
      this.dialog.open(ModalCriarContaComponent, {
         disableClose: true,
         maxWidth: '400px',
         width: '100%',
         data: {
            animal: 'panda',
         },
      });
   }
}
