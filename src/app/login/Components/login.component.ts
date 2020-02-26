import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username: string = 'admin';
  password: string = 'admin';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["article"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
