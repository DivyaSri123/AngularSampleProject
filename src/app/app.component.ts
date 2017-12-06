import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [FormBuilder]
})
export class AppComponent implements OnInit {
  title = 'app';
  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  submitted: boolean = false;
  login: object;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
    
  }


onsubmit(value){
  this.submitted = true;
  console.log("clicked me", this.submitted);
  // this.router.navigate(['/success']);
  
}

  ngOnInit() {

  }
}
