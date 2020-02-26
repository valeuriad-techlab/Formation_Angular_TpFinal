import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login.component';
import { MaterialModule } from '../material/material.module';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
