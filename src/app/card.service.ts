import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import { Card } from './card';
import 'rxjs/add/operator/map';


@Injectable()
export class CardService {

  constructor(private _http: Http) { }




  card = {serial: 1, custID: 1001, cardNum: 'testing', name: 'JerryZ',
  cardTyp: 'test', instID: 96, expDt: '02/01/1996', secCode: 'tst',
  createDt: 'test', updateDt: 'test'};

  setCard(tempCard: Card): void {
    this.card = tempCard;
  }


  addCard(): Observable<string> {
    return this._http.post('http://localhost:8080/addCard', this.card)
    .map((response: Response) => response.text());
  }

}
