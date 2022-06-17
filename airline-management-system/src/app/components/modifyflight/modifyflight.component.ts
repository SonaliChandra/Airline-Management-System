import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFlight } from 'src/app/classes/createflight';
import { PolicyService } from 'src/app/policy.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-modifyflight',
  templateUrl: './modifyflight.component.html',
  styleUrls: ['./modifyflight.component.css']
})
export class ModifyflightComponent implements OnInit {

  title="update flight details";
  ufobj: CreateFlight = new CreateFlight;
  flights:any;
  constructor(public router: Router, private policyService: PolicyService) { }

  onUpdate() {
    console.log("Inside onUpdate Method !!");
    for (let index = 0; index < this.flights.length; index++) {
      let element = this.flights[index];
      if(element.providerCode==this.ufobj.providerCode && element.providerType==this.ufobj.providerType) {
        console.log(element);
        this.ufobj.id=element.id;
        this.ufobj.providerName=element.providerName;
      }
    }
    this.policyService.updateFlightDb(this.ufobj).subscribe(ret=>{
      console.log("Flight Updated: ", ret);
    });
    this.router.navigate([""]);
  }
  getFlights(){
    this.policyService.getFlights().subscribe(data => {
      this.flights = data;
      console.log(this.flights);
    });
  }
  ngOnInit(){
    this.getFlights();
  }

}
