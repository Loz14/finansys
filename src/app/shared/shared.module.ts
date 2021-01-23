import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from "angular-imask";
import { CalendarModule } from 'primeng/calendar';
import { BreadCrumpComponent } from './components/bread-crump/bread-crump.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BreadCrumpComponent],
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
    BreadCrumpComponent
  ]
})
export class SharedModule { }
