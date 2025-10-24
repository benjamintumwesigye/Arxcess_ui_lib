import { Injectable, TemplateRef, ViewContainerRef, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { FocusTrapFactory } from '@angular/cdk/a11y';

export interface ModalConfig extends OverlayConfig {
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  positionStrategy?: PositionStrategy;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  private activeModals = new Set<OverlayRef>();

  constructor(
    private overlay: Overlay,
    private focusTrapFactory: FocusTrapFactory
  ) {}

  open<T>(
    content: TemplateRef<any> | ComponentRef<T>,
    viewContainerRef: ViewContainerRef,
    config: ModalConfig = {}
  ): OverlayRef {
    const defaultConfig: ModalConfig = {
      hasBackdrop: true,
      backdropClass: 'bg-background/80 backdrop-blur-sm',
      panelClass: 'modal-panel',
      closeOnBackdropClick: true,
      closeOnEscape: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    };

    const finalConfig = { ...defaultConfig, ...config };
    const overlayRef = this.overlay.create(finalConfig);

    const portal = content instanceof TemplateRef 
      ? new TemplatePortal(content, viewContainerRef)
      : new ComponentPortal(content.componentType);

    const portalRef = overlayRef.attach(portal);

    const focusTrap = this.focusTrapFactory.create(overlayRef.overlayElement);
    focusTrap.focusInitialElementWhenReady();

    if (finalConfig.closeOnBackdropClick) {
      overlayRef.backdropClick().subscribe(() => this.close(overlayRef));
    }

    if (finalConfig.closeOnEscape) {
      overlayRef.keydownEvents().subscribe(event => {
        if (event.key === 'Escape') {
          this.close(overlayRef);
        }
      });
    }

    this.activeModals.add(overlayRef);
    return overlayRef;
  }

  close(overlayRef: OverlayRef): void {
    overlayRef.dispose();
    this.activeModals.delete(overlayRef);
  }

  closeAll(): void {
    this.activeModals.forEach(overlayRef => this.close(overlayRef));
  }
}
