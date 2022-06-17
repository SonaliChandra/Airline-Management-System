import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFlight } from 'src/app/classes/createflight';
import { PolicyService } from './../../policy.service';


@Component({
  selector: 'app-createflight',
  templateUrl: './createflight.component.html',
  styleUrls: ['./createflight.component.css']
})
export class CreateflightComponent implements OnInit {

  title:string="create flight";
  cfobj: CreateFlight=new CreateFlight;
  codePlaceHolder:any;
  flights:any;
  constructor(public router: Router, private policyService: PolicyService) {
   }
   
  getCode() {
    console.log("Inside getCode Method !!");
    if(this.cfobj.providerName.toUpperCase()==="INDIGO"){
        this.cfobj.providerCode="6E-";
    }
    if(this.cfobj.providerName.toUpperCase()==="SPICEJET"){
      this.cfobj.providerCode="SG-";
    }
    if(this.cfobj.providerName.toUpperCase()==="AIR ASIA"){
      this.cfobj.providerCode="I5-";
    }
    if(this.cfobj.providerName.toUpperCase()==="GO AIR"){
      this.cfobj.providerCode="G8-";
    }
    if(this.cfobj.providerName.toUpperCase()==="JET AIRWAYS"){
      this.cfobj.providerCode="9W-";
    }
    if(this.cfobj.providerName.toUpperCase()==="AIR INDIA"){
      this.cfobj.providerCode="AI-";
    }
  }

  onInsert() {
    console.log(this.cfobj?.providerName + " :: " + this.cfobj?.providerCode +" :: "+ this.cfobj?.providerType );
    this.cfobj.id=this.flights.length+ 1;
    console.log(this.cfobj.id);
    this.policyService.createFlightDb(this.cfobj).subscribe((ret)=>{
      console.log("Flight created: ", ret);
    });
    this.router.navigate([""]);
  }

  getFlights(){
    this.policyService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }

  ngOnInit(){
    this.getFlights();
  }
}
