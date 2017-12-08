import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  title = 'app';
  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  submitted: boolean = false;
  login: object;
  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
    
  }


onsubmit(value){debugger;
  this.submitted = true;
  // console.log("clicked me", this.submitted);
  this.router.navigate(['success']);
  
}

  ngOnInit() {
  }

}
