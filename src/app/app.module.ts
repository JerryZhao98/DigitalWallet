import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { WalletComponent } from './wallet.component';
import { CustomerComponent } from './customer.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormGroup } from '@angular/forms';



import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MenuComponent } from './menu.component';
import { CustomerService } from './customer.service';
import { WalletService } from './wallet.service';
import { CardService } from './card.service';

const appRoutes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'customer', component: CustomerComponent},
  { path: 'wallet', component: WalletComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WalletComponent,
    CustomerComponent,
    PageNotFoundComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [CustomerService, WalletService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
