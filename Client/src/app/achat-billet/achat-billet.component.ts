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


  Airport: Airport[] = [
    {value: 'steak-0', viewValue: 'DTW'},
    {value: 'pizza-1', viewValue: 'JFK'},
    {value: 'tacos-2', viewValue: 'CDG'}
  ];

  Cabine: Cabine[] = [
    {value: 'Economy', viewValue: 'Economy'},
    {value: 'Business', viewValue: 'Business'}
  ];

  vols = <any>[];
  fVols

  constructor(private volService: VolsService) {
  }


  ngOnInit(): void {
    //this.init();
    this.getAllFlight();
  }

  async init() {
    this.fVols = [];
    await this.volService.searchFlight(this.vols.depart, this.vols.arrivee ).then(res => {
        this.vols = res;
        console.log(res);
        this.fVols = res
      this.fVols.forEach(element => console.log(element))
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



}
