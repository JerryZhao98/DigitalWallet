import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})


export class LoginComponent implements OnInit {
  isVerified: string;
  email: '';
  pass: '';
  router: Router;

  constructor(_router: Router, private _loginService: LoginService, private _customerService: CustomerService) {
    this.router = _router;
  }

  ngOnInit() {
  }


  verifyLogin(): void {
    this._loginService.setEmail(this.email, this.pass);
    this._loginService.verify().subscribe((verification) => {
      this.isVerified = verification;
      this.verifyLogin2();
    });
  }
  verifyLogin2(): void {
    console.log('Verification is ' + this.isVerified);
    console.log('Email is: ' + this.email + ' password is: ' + this.pass);
    this._customerService.setCust(this._loginService.getCust());
    console.log('asdf2');
    console.log(this.isVerified);
    if (this.isVerified) {
      console.log('asdf');
      this.router.navigate(['/wallet']);
    }
  }

  register(): void {
    this.router.navigate(['/customer']);
  }
}
