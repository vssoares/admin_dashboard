import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  private modalNotifier?: Subject<string>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(
      ModalComponent
    );
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    modalComponent.instance.options = options;
    modalComponent.instance.closeEvent.subscribe(() => this.close());
    modalComponent.instance.submitEvent.subscribe(() => this.submit());

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    modalComponent.location.nativeElement.classList.add('animated', 'fadeAnimation');
    this.modalNotifier = new Subject();
    return modalComponent.instance
  }

  close() {
    this.modalNotifier?.next('close');
    this.modalNotifier?.complete();
  }

  submit() {
    this.modalNotifier?.next('confirm');
    this.close();
  }

}