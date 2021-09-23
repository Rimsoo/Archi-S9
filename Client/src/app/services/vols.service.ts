import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {async, Observable} from "rxjs";
import {Vol, Vols} from "../model/vol";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VolsService {
  apiUrl = environment.backend_base +'/vols/CDG/JFK';

  headers= new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }


  getAgence(): Observable<Vol> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Vol>(`${this.apiUrl}`, httpOptions ).pipe(map(vol => vol));
  }
}

