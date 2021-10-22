import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Currency } from './currency.model';
import { ExchangeRatesService } from './exchange-rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-exchanger';
  selectedRecipientValue:any="USD";
  selectedSendValue:any="USD";
  sendValue:number=0;
  recipientValue:number=0;
  rates :Currency[]=[];
  selectedSendCurrency:any={ name: 'USD', rate: 1 };
  selectedRecipientCurrency:any={ name: 'USD', rate: 1 };
  constructor( private exchangeRate: ExchangeRatesService){
    this.rates=exchangeRate.getRates();
  }

  getCurrencyByName(name:string){
     return this.rates.find((rate:Currency )=> (rate.name===name));
  }
  changeSendCurrency(){

   this.selectedSendCurrency= this.getCurrencyByName(this.selectedSendValue);
    if(this.sendValue>0)
    {
      this.sendValueChanged();
    }
   
  }
  changeRecipientCurrency(){

   this.selectedRecipientCurrency= this.getCurrencyByName(this.selectedRecipientValue);
     if(this.recipientValue>0)
    {
      this.recipientValueChanged();
    }
  }
  sendValueChanged()
  {
    this.recipientValue=this.sendValue* this.selectedRecipientCurrency.rate/this.selectedSendCurrency.rate ;
  }

  recipientValueChanged()
  {
    this.sendValue=this.recipientValue/ this.selectedRecipientCurrency.rate*this.selectedSendCurrency.rate ;
    
  }
}
