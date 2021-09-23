import { Component, OnInit } from '@angular/core';
import {VolsService} from "../services/vols.service";
import {Vols} from "../model/vols";

interface Airport {
  value: string;
  viewValue: string;
}

interface Cabine {
  value: string;
  viewValue: string;
}

interface Passagers {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-achat-billet',
  templateUrl: './achat-billet.component.html',
  styleUrls: ['./achat-billet.component.scss']
})
export class AchatBilletComponent implements OnInit {


  Airport = <any>[];

  Cabine: Cabine[] = [
    {value: 'Economy', viewValue: 'Economy'},
    {value: 'Business', viewValue: 'Business'}
  ];
  departure: string
  arrival: string
  vols = <any>[];

  constructor(private volService: VolsService) {
  }


  ngOnInit(): void {
    //this.init();
    this.getAllFlight();
    this.getAirports();
  }

  async search() {
  
    await this.volService.searchFlight(this.departure, this.arrival ).then(res => {
        this.vols = res;
        console.log(res);
      }, r => {
        console.log('errr' + r);
      });

  }

  async getAllFlight() {
    await this.volService.getAllFlight().then(res => {
      this.vols = res;
    }, r => {
      console.log('errr' + r);
    });

  }

  async getAirports() {
    await this.volService.getAirports().then(res => {
      this.Airport = res;
    }, r => {
      console.log('errr' + r);
    });
  }

  // updateDeparture(event : Event) {
  //   console.log(event.target);
  //   console.log("poueeeet");
    
  //   this.depart = event;
  // }

  // updateArrival(arrivee: any) {
  //   this.arrivee = arrivee;
  // }
}
