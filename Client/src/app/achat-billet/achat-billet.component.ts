import { Component, OnInit } from '@angular/core';

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

  Passagers: Passagers[] = [
    {value: 'Jeune', viewValue: 'Jeune(18-24 ans)'},
    {value: 'Etudiant', viewValue: 'Etudiant(18-29 ans)'},
    {value: 'Adulte', viewValue: 'Adulte'},
    {value: 'Senior', viewValue: 'Senior(65 ans et plus)'},
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
