import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFlight } from 'src/app/classes/createflight';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {

  title="delete flight";
  dfobj: CreateFlight = new CreateFlight;
  flights: any;
  constructor(public router: Router, public policyService : PolicyService) { }

  onDelete() {
    console.log("Inside onDelete Method !!");
    console.log( this.dfobj.providerCode +" :: "+ this.dfobj.providerType );

    for (let index = 0; index < this.flights.length; index++) {
      let element = this.flights[index];
      if(element.providerCode==this.dfobj.providerCode && element.providerType==this.dfobj.providerType) {
        console.log(element);
        this.dfobj.id=element.id;
        this.dfobj.providerName=element.providerName;
      }
      this.router.navigate([""]);
    }
    console.log( this.dfobj.id+" :: "+this.dfobj.providerName+" :: "+this.dfobj.providerCode +" :: "+ this.dfobj.providerType );
    console.log("Hi");
    this.policyService.deleteFlightDb(this.dfobj.id).subscribe(ret=>{
      console.log("Policy deleted: ", ret);
    })
  }
  getFlights(){
    this.policyService.getFlights().subscribe(data => {
      this.flights = data;
      console.log(this.flights);
    });
  }
  ngOnInit():void {
    this.getFlights();
  }

}
