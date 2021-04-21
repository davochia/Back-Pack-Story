import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   loginFormGroup: FormGroup;
  // user = {
  //   email: '',
  //   password: '',
  //   remember: false,
  // };

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
  ) {
    this.loginFormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('User: ', this.loginFormGroup.value);
    this.dialogRef.close();
  }
}
