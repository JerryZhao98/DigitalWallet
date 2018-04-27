import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { Card } from './card';
import { CardService } from './card.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  router: Router;

  constructor(_router: Router, private _customerService: CustomerService, private _cardService: CardService) {
    this.router = _router;
  }

  custProf: Customer;

  isSaved: string;

  selectedType = 'default';
  selectedInst = 0;
  cardNum = '';
  selectedMonth = '01';
  selectedYear = '18';
  name = '';
  secCode = '';
  tempCard: Card;
  ngOnInit() {
    this.custProf = this._customerService.getCust();
  }


  addCard(): void {
    this.tempCard = {serial: 0, custID: this.custProf.custID, cardNum: this.cardNum,
      name: this.name, cardTyp: this.selectedType, instID: this.selectedInst,
      expDt: this.selectedMonth + '/01/20' + this.selectedYear, secCode: this.secCode,
      createDt: '', updateDt: ''};
    this._cardService.setCard(this.tempCard);
    this._cardService.addCard().subscribe((result) => {
      this.isSaved = result;
      this.addCard2();
    });
  }
  addCard2(): void {
    console.log('Result is ' + this.isSaved);


    this.router.navigate(['/wallet']);

  }

  cancel(): void {
    this.router.navigate(['/wallet']);
  }

  setCardType(): void {
    console.log('Selected type: ' + this.selectedType);
    console.log('Selected inst: ' + this.selectedInst);
    console.log('Card num: ' + this.cardNum);
    console.log('Selected month: ' + this.selectedMonth);
    console.log('Selected year: ' + this.selectedYear);
    console.log('Name: ' + this.name);
    console.log('Sec code: ' + this.secCode);
    console.log('Customer ID: ' + this.custProf.custID);
  }


}
