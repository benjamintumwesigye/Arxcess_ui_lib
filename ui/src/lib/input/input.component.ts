import { Component, Input, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cn } from '../utils';

@Component({
  selector: 'ui-input',
  standalone: true,
  template: `
    <input 
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [class]="classes"
      [value]="value"
      (input)="onInput($event)"
      (blur)="onBlur()"
      (focus)="onFocus()"
      [attr.aria-invalid]="invalid"
      [attr.aria-describedby]="describedBy"
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() describedBy: string | null = null;

  value: string = '';
  private onChange = (value: string) => {};
  private onTouched = () => {};

  @HostBinding('class') get classes() {
    return cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      this.invalid && "border-destructive focus-visible:ring-destructive"
    );
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onFocus(): void {
    // Handle focus if needed
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
