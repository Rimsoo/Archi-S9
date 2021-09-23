import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, asyncScheduler} from "rxjs";
import {Vols} from "../model/vols";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VolsService {
  apiUrl = environment.backend_base +'/vols';

  headers= new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  /**
   * Search Flight
   * @param depart
   * @param arrivee
   */
  async searchFlight(depart: string, arrivee : string): Promise<Vols> {
    return new Promise<Vols>(((resolve, reject) => {
      this.http.get(`${this.apiUrl}/${depart}/${arrivee}`, {responseType: 'text'}).toPromise().then(
        res => {
          resolve(JSON.parse(res));
        }, rej => {
          reject(rej);
        }
      );
    }));
  }

  async getAllFlight(): Promise<Vols> {
    return new Promise<Vols>(((resolve, reject) => {
      this.http.get(`${this.apiUrl}`, {responseType: 'text'}).toPromise().then(
        res => {
          resolve(JSON.parse(res));
        }, rej => {
          reject(rej);
        }
      );
    }));
  }



}


