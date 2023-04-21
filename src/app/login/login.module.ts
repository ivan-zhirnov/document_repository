import {NgModule} from "@angular/core";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";

@NgModule({
  imports: [LoginRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {}
