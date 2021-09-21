import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vol} from "../model/vol";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VolsService {
  apiUrl = environment.backend_base +'/vols/name/CDG/JFK';

  headers= new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }


  getAgence(): Observable<Vol> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
      })
    };
    return this.http.get<Vol>(`${this.apiUrl}`, httpOptions ).pipe(map(vol => vol));
  }
}
