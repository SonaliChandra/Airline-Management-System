import { DataService } from './../../data.service';
import { CreateFlight } from 'src/app/classes/createflight';
import { FetchFlight } from './../../classes/fetchflight';
import { PolicyService } from './../../policy.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  vfobj: CreateFlight=new CreateFlight;
  flights: any;
  arr:Array<CreateFlight> = [];
  constructor(private policyService: PolicyService) { }

  getFlights(){
    this.policyService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }
  onView() {
    while(this.arr.length!=0){
      this.arr.pop();
    }
    console.log("view:"+this.vfobj.providerType);
    for (let index = 0; index < this.flights.length; index++) {
      const element = this.flights[index];
      if(element.providerType==this.vfobj.providerType){
          this.arr.push(element);
      }
      
    }
  }
  ngOnInit() {
    this.getFlights();
  }

  
}
