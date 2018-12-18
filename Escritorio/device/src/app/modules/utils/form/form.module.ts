import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../../../material';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FormComponent],
  declarations: [FormComponent]
})
export class FormModule { }
