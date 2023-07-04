import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ModalOptions } from './modal';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [fadeAnimation],
})
export class ModalComponent {
  @Input() options?: ModalOptions;
  open = true;

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  close() {
    setTimeout(() => {
      this.elementRef.nativeElement.remove();
    }, 300);
    this.closeEvent.emit();
  }

  submit(){
    setTimeout(() => {
      this.elementRef.nativeElement.remove();
    }, 300);
    this.submitEvent.emit();
  }
}
