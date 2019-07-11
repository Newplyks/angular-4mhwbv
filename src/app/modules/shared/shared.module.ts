import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';
import {CustomMaterialModule} from '../material.module';
import {NotificationService} from './services/notification.service';
import {ValidationErrorsComponent} from './components/validation-errors/validation-errors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PositiveIntegerDirective} from './input-limiters/positive-integer';


@NgModule({
  declarations: [
    ValidationErrorsComponent,
    PositiveIntegerDirective,
  ],
  imports: [
    CommonModule,
    ToastrModule,
    CustomMaterialModule
  ],
  exports: [
    CustomMaterialModule,
    ValidationErrorsComponent,
    FormsModule,
    ReactiveFormsModule,
    PositiveIntegerDirective,
  ],
  providers: [
    NotificationService
  ]
})
export class SharedModule {
}
