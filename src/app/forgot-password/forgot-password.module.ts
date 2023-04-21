import { NgModule } from '@angular/core';
import {ForgotPasswordRoutingModule} from "./forgot-password-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ForgotPasswordComponent} from "./forgot-password.component";
import {ForgotPasswordService} from "./forgot-password.service";



@NgModule({
  imports: [ForgotPasswordRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [ForgotPasswordComponent],
  exports: [ForgotPasswordComponent],
  providers: [ForgotPasswordService]
})
export class ForgotPasswordModule { }
