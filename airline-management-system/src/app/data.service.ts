import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { CreateFlight } from './classes/createflight';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor(){}

  createDb(){
    const flights: CreateFlight[] = [
      {
        id:1,providerName:'Jet Airways',
        providerCode:'9W-',providerType:'Domestic'
              },
             {
         id:2,providerName:'Emirates',
         providerCode:'EK-',providerType:'International'
             }    
    ];
   
    return { flights };
  }
}
