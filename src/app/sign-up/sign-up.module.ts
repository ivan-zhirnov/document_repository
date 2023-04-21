import {NgModule} from "@angular/core";
import {SignUpComponent} from "./sign-up.component";
import {RouterModule, Routes} from "@angular/router";
import {SignUpRoutingModule} from "./sign-up-routing.module";


@NgModule({
  imports: [
    SignUpRoutingModule
  ],
  exports: [SignUpComponent],
  declarations: [SignUpComponent],
  providers: []
})
export class SignUpModule {}
