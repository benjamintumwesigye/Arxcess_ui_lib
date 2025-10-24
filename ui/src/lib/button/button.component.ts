import { Component, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

@Component({
  selector: 'ui-button',
  standalone: true,
  template: `
    <button 
      [type]="type" 
      [disabled]="disabled || loading" 
      [class]="classes"
      [attr.aria-disabled]="disabled || loading"
      (click)="onClick.emit($event)"
      (blur)="onBlur.emit($event)">
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: ButtonProps['variant'] = 'default';
  @Input() size: ButtonProps['size'] = 'default';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() loading = false;
  
  @Output() onClick = new EventEmitter<MouseEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();

  @HostBinding('class') get classes() {
    return cn(
      buttonVariants({ 
        variant: this.variant, 
        size: this.size 
      }),
      this.loading && 'opacity-50 cursor-not-allowed'
    );
  }
}
