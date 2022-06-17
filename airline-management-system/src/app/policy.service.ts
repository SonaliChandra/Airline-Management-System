import { FetchFlight } from './classes/fetchflight';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { CreateFlight } from './classes/createflight';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getFlights(){ 
       return this.httpClient.get(this.SERVER_URL + 'flights');
  }

  public getFlight(providerCode: any){
       return this.httpClient.get(`${this.SERVER_URL + 'flights'}/${providerCode}`); 
  }
  public createFlightDb(flight: {id: number, providerName: String, providerCode: String, providerType: string}){
      return this.httpClient.post(`${this.SERVER_URL + 'flights'}`, flight)
  }

  public deleteFlightDb(flightId:any){
    return this.httpClient.delete(`${this.SERVER_URL + 'flights'}/${flightId}`)
}
  public updateFlightDb(flightUpdateObj: {id: number, providerName: String, providerCode: String, providerType: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'flights'}/${flightUpdateObj.id}`, flightUpdateObj)
  }
 
}
