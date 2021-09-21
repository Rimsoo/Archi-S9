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
    return this.http.get<Vol>(`${this.apiUrl}`, { 'headers': this.headers }).pipe(map(vol => vol));
  }
}
