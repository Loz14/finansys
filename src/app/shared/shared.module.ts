import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from "angular-imask";
import { CalendarModule } from 'primeng/calendar';
import { BreadCrumpComponent } from './components/bread-crump/bread-crump.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';



@NgModule({
  declarations: [BreadCrumpComponent, PageHeaderComponent, FormFieldErrorComponent, ServerErrorMessagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CalendarModule,
    IMaskModule
  ], 
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CalendarModule,
    IMaskModule,
    //components
    BreadCrumpComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule { }
