import { Component, OnInit } from '@angular/core';
import {VolsService} from "../services/vols.service";

@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.scss']
})
export class VolsComponent implements OnInit {

  vols = <any>[];

  constructor(private volService: VolsService) { }

  ngOnInit(): void {
    this.getAllFlight();
  }

  async getAllFlight() {
    await this.volService.getAllFlight().then(res => {
      this.vols = res;
    }, r => {
      console.log('errr' + r);
    });

  }

}
