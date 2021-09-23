import { Component, OnInit } from '@angular/core';
import {VolsService} from "../services/vols.service";
import {first} from "rxjs/operators";
import {Vol, Vols} from "../model/vol";

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

  vol;

  constructor(private volService: VolsService) {
  }


  ngOnInit(): void {
    this.getVols();
  }

  getVols(): void {
    this.volService.getAgence().pipe(first()).subscribe((res) =>{
      //console.log("Api-rest:-- "+JSON.stringify(res));
        this.vol = JSON.stringify(res);
      console.log("Api-rest:-- "+this.vol);
      //return JSON.stringify(res);
      //this.vol = res.result

    }, error => {
      console.log("err---"+error);
    })
  }

}
