import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../../utils/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    re_password: new FormControl(''),
    agreeTerm: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private _route:Router) {}
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
        password: [
          '',
          [
            Validators.required, Validators.pattern(this.passwordRegex)
          ]
        ],
        re_password: ['', Validators.required],
        agreeTerm: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 're_password')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  xyz(){
    // this.submitted = true;
    // this.f['name'].setValue(this.f['name'].value.trim()); 
    this.f['email'].setValue(this.f['email'].value.trim()); 
    this.f['password'].setValue(this.f['password'].value.trim()); 
    this.f['re_password'].setValue(this.f['re_password'].value.trim()); 
    if (this.form.invalid) {
      return;
    }
  }
  

  onSubmit(): void {
    this.form.markAllAsTouched();
    // this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this._http.post<any>('http://localhost:3000/user', this.form.value)
    .subscribe(res=>{
      alert("You are successfully signed up!");
      this.form.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Something went wrong!');
    })

    console.log(JSON.stringify(this.form.value));
  }

}
