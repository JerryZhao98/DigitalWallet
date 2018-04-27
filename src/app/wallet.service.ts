import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import { Card } from './card';
import 'rxjs/add/operator/map';

@Injectable()
export class WalletService {

  constructor(private _http: Http) { }

  getCards(custID: number): Observable<Card[]> {
    return this._http.post('http://localhost:8080/retrieveW', JSON.stringify(custID))
    .map((response: Response) => <Card[]>response.json());
  }

  deleteCard(serial: number): Observable<string> {
    return this._http.post('http://localhost:8080/deleteCard', serial)
    .map((response: Response) => response.text());
  }

}
