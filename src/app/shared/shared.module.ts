import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from "angular-imask";
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    IMaskModule
  ], 
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    IMaskModule
  ]
})
export class SharedModule { }
