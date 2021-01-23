import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage(): string | null {
    if (this.formControl.invalid && this.formControl.touched)
      return this.getErrorMessage();
    else
      return null
  }

  private getErrorMessage(): string | null {
    if (this.formControl.errors.required)
      return 'Dado Obrigatório'

    else if (this.formControl.errors.minlength){
      const requiredLength: number = this.formControl.errors.minlength.requiredLength;
      return `Minímo de ${requiredLength} caracteres`
    }

    else if (this.formControl.errors.maxlength){
      const requiredLength: number = this.formControl.errors.maxlength.requiredLength;
      return `Minímo de ${requiredLength} caracteres`
    }

    else if (this.formControl.errors.email)
      return 'Email Inválido'

    else null

  }
}
