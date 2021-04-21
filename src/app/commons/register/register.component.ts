import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('fform')
  registerFormDirective: any;

  registerFormGroup: FormGroup;
  registerForm: Register;
  registerErrMess: string;

  formErrors: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private fb: FormBuilder
  ) {
    this.createRegister();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.registerForm = this.registerFormGroup.value;
    console.log(this.registerForm);
    this.registerFormGroup.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      string: '',
    });
    this.dialogRef.close();
  }

  createRegister() {
    this.registerFormGroup = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [, [Validators.required, Validators.pattern]],
      address: ['', Validators.required],
    });

    this.registerFormGroup.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.registerFormGroup) {
      return;
    }

    const form = this.registerFormGroup;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';

        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];

          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  validationMessages: any = {
    firstName: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 2 characters long.',
      maxlength: 'FirstName cannot be more than 25 characters long.',
    },
    lastName: {
      required: 'Last Name is required.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last cannot be more than 25 characters long.',
    },

    email: {
      required: 'Email is required.',
      email: 'Email not in valid format.',
    },

    phone: {
      required: 'Tel. number is required.',
      pattern: 'Invalid character.',
    },

    address: {
      required: 'address is required.',
    },
  };
}
