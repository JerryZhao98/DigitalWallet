import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(_router: Router, private _customerService: CustomerService) {
    this.router = _router;
  }

  email = '';
  fName = '';
  lName = '';
  pass = '';
  rPass = '';
  phone = 0;
  street = '';
  postCd = '';
  state = '';
  country = '';
  addrID = 0;
  router: Router;

  tempAddr = {addrID: 0, street: '1234', postCd: '1234', state: '1234', country: '1234'};
  tempCust = { custID: 1, fName: 'j', lName: 'z', email: 'jerryzhao@gmail.com',
  phoneNum: 123, addrID: 5, password: 'pword'};

  ngOnInit() {
  }

  fieldCheck(): void {
    if (this.email === '' || this.fName === '' || this.lName === '' || this.pass === '' || this.rPass === '' ||
    this.phone === 0 || this.street === '' || this.postCd === '' || this.state === '' || this.country === '') {
      console.log('Missing fields');
    } else if (this.pass !== this.rPass) {
      console.log('Passwords must match');
    } else {
      this.emailCheck();
    }

  }

  emailCheck(): void {
    this._customerService.checkEmail(this.email).subscribe((result) => {
      if (result === '0') {
        console.log('Email already exists');
      } else {
        this.getAddr();
      }
    });

  }

  getAddr(): void {
    this.tempAddr = {addrID: 0, street: this.street, postCd: this.postCd,
      state: this.state, country: this.country};
    this._customerService.getAddrID(this.tempAddr).subscribe((result) => {
      this.addrID = +result;
      console.log('The address ID is:' + this.addrID);
      this.test();
      this.addCust();
    });
  }
  test(): void {
    console.log('Street ' + this.street);
    console.log('post cd ' + this.postCd);
    console.log('state ' + this.state);
    console.log('country ' + this.country);
  }

  addCust(): void {
    this.tempCust = { custID: 0, fName: this.fName, lName: this.lName, email: this.email,
    phoneNum: this.phone, addrID: this.addrID, password: this.pass};
    this._customerService.addCust(this.tempCust).subscribe((result) => {
      console.log('Registering is ' + result);
      this.router.navigate(['/login']);
    });
  }

  return(): void {
    this.router.navigate(['/login']);
  }
}
