import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import 'rxjs/add/operator/map';
import { Address } from './address';


@Injectable()
export class CustomerService {

  constructor(private _http: Http) { }

  custProf: Customer;

  setCust(tempCust: Customer): void {
    this.custProf = tempCust;
  }

  getCust(): Customer {
    return this.custProf;
  }

  getProf(): Observable<Customer> {
    return this._http.post('http://localhost:8080/login', this.custProf)
    .map((response: Response) => <Customer>response.json());
  }

  getAddrID(addr: Address): Observable<string> {
    console.log('asdf');
    return this._http.post('http://localhost:8080/addressID', addr)
    .map((response: Response) => response.text());
  }

  checkEmail(email: string): Observable<string> {
    console.log('sent email is ' + email);
    return this._http.post('http://localhost:8080/checkEmail', email)
    .map((response: Response) => response.text());
  }

  addCust(tempCust: Customer): Observable<string> {
    return this._http.post('http://localhost:8080/addCust', tempCust)
    .map((response: Response) => response.text());
  }
}
