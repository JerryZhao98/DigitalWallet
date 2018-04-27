import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  // tempCust: Customer;
  tempCust = { custID: 1, fName: 'j', lName: 'z', email: 'jerryzhao@gmail.com',
phoneNum: 123, addrID: 5, password: 'pword'};

userEmail = '';
userPass = '';



  constructor(private _http: Http) { }

  verify(): Observable<string> {
    return this._http.post('http://localhost:8080/verify', this.tempCust)
    .map((response: Response) => response.text());
  }

  setEmail(email: string, pass: string): void {
    this.userEmail = email;
    this.userPass = pass;
    if (email) {
      this.tempCust = { custID: 1, fName: 'j', lName: 'z', email: this.userEmail,
      phoneNum: 123, addrID: 5, password: this.userPass};
    }
    console.log('Email is: ' + this.userEmail + ' pass is: ' + this.userPass);
  }

  getCust(): Customer {
    return this.tempCust;
  }

}
