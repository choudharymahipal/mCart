import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserActivityService } from 'src/app/Services/user-activity.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userSvc: UserActivityService) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {

  }

  login() {
    let _email = this.loginForm.get("email")?.value;
    let _pass = this.loginForm.get("password")?.value;

    let currentUser = this.userSvc.AllUsers.filter(x => x.email == _email && x.password == _pass);

    if (currentUser.length > 0) {
      //Valid user
      this.router.navigateByUrl("/");
    } else {
      //Invalid user

    }
  }

}
