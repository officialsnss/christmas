import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import Validation;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
        password: [
          '',
          [
            Validators.required, Validators.pattern(this.passwordRegex)
          ]
        ]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  xyz(){
    // this.submitted = true;
    this.f['email'].setValue(this.f['email'].value.trim()); 
    this.f['password'].setValue(this.f['password'].value.trim()); 
    if (this.form.invalid) {
      return;
    }
  }
  

  onSubmit(): void {
    this.form.markAllAsTouched();
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value));
  }

}


  

  

