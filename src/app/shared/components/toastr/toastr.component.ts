import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  standalone: true,
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css'],
  imports: [MatSnackBarModule],
})
export class ToastrComponent {
  mensagem: string = '';
  options: any;

  constructor(
    private service: ToastrService,
    private _snackBar: MatSnackBar,
  ) {

    this.service.exibir$.subscribe({
      next: (data) => {
        this.mensagem = data.mensagem;
        this.options = data.options;
        this.exibir();
      }
    })

  }

  exibir() {
    this._snackBar.open(this.mensagem, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
