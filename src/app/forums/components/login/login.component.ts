import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { EApiUrls } from '../../../core/enums/api-urls.enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpService
  ) { 
    this.signInForm = this.fb.group({
      username : [''],
      password : [''],
    });
  }

  ngOnInit() {
  }

  onSubmitForm() {
    const controls = this.signInForm
    const user = {
      username: controls.value.username,
      password: controls.value.password
    }

    this.http.post(EApiUrls.SIGNIN, user).subscribe((value: {token: string}) =>{
      localStorage.setItem('token', value.token);
      controls.reset()
    },
    error => {
      // error - объект ошибки
    });

  }

}
