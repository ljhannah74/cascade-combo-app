import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';

@Injectable()
export class SelectService {

  countryId = null;
  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'Brazil' ),
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Sao Paulo' ),
     new State(6, 2, 'Rio de Janeiro'),
     new State(7, 2, 'Minas Gerais' )
    ];
  }

  filterStates(){
    if(!this.countryId) return null;
return this.getStates().filter((item) => item.countryid == this.countryId);
  }


}