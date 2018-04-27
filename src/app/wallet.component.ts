import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { Card } from './card';
import { WalletService } from './wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  router: Router;

  constructor(_router: Router, private _customerService: CustomerService, private _walletService: WalletService) {
    this.router = _router;
  }

  custProf: Customer;
  cardList: Card[];

  ngOnInit() {
    console.log('Successfully routed into wallet');
    this._customerService.getProf().subscribe((profile) => {
      this.custProf = profile;
      this._customerService.setCust(profile);
      this.loadWallet();
    });
    console.log('Successfully routed into wallet2');
  }

  loadWallet(): void {
    this._walletService.getCards(this.custProf.custID).subscribe((wallet) => {
      this.cardList = wallet;
    });
  }

  redirectAddCard(): void {
    this.router.navigate(['/card']);
  }

  delete(serial: number): void {
    this._walletService.deleteCard(serial).subscribe((response) => {
      console.log('Card has been ' + response);
        this.loadWallet();
    });
  }

}
