import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  mail: string = 'ivanov@mail.ru';

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      "mail": this.mail
    })
  }

  resetPassword(value: {mail: string}) {
    this.authService.resetPassword(value.mail).subscribe();
  }

}
