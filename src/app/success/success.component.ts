import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { router } from '../app.router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.sass']
})
export class SuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(event){
    this.router.navigate(['login']);
  }
}
