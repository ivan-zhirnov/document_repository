import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  name: string = "name";
  surname: string = "surname";
  patronymic: string = "patronymic";
  mail: string = 'ivanov@mail.ru';
  password: string = '12345';
  repeatedPassword: string = '12345';


  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      "name": [this.name],
      "surname": [this.surname],
      "patronymic": [this.patronymic],
      "mail": [this.mail],
      "password": [this.password],
      "repeatedPassword": [this.repeatedPassword]
    });
  }

  signUp({value}: { value: any }) {
    this.authService.signUp(value.surname, value.name, value.patronymic, value.mail, value.password).subscribe();
  }

}
