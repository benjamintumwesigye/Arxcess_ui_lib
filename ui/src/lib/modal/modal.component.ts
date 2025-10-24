import { Component, TemplateRef, inject, ViewChild, Input, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { cn } from '../utils';

@Component({
  selector: 'ui-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template #content>
      <div [class]="cn('fixed inset-0 z-50 flex items-center justify-center', 'bg-background/80 backdrop-blur-sm')">
        <div [class]="cn('m-4 rounded-lg border bg-background p-6 shadow-lg', 'w-full max-w-md')">
          <div class="flex items-center justify-between mb-4">
            <h2 *ngIf="title" class="text-lg font-semibold">{{ title }}</h2>
            <button 
              (click)="close()" 
              class="text-muted-foreground hover:text-foreground text-xl leading-none"
              aria-label="Close modal">
              ×
            </button>
          </div>
          <ng-content />
        </div>
      </div>
    </ng-template>
  `
})
export class ModalComponent {
  @ViewChild('content') content!: TemplateRef<any>;
  @Input() title?: string;
  
  private modalService = inject(ModalService);
  private viewContainerRef = inject(ViewContainerRef);
  private overlayRef: any;

  cn(...inputs: any[]) {
    return cn(...inputs);
  }

  open(): void {
    this.overlayRef = this.modalService.open(this.content, this.viewContainerRef);
  }

  close(): void {
    if (this.overlayRef) {
      this.modalService.close(this.overlayRef);
    }
  }
}
