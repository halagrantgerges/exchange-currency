import { Injectable } from '@angular/core';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  private rates :Currency[]=[
  { name: 'USD',
    rate: 1
  },
   { name: 'EUR',
  rate:0.815894
  },
 { name: 'CAD',
  rate: 1.204355
}, 
{ name: 'GBP',
rate:0.70602
}, 
{ name: 'MXN',
rate: 19.88162
},
{ name: 'PLN',
rate: 3.66121
}
 ];
  
  constructor() { }

  getRates() :Currency[]
  {
    return [...this.rates];

  }
}
