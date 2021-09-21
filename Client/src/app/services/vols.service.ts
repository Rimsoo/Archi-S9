import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vol} from "../model/vol";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VolsService {
  private vol: Vol = new Vol;
  apiUrl = environment.backend_base +'/vols/name/';



  constructor(private http: HttpClient) { }

  insertOrUpdate(agence: FormData): Observable<boolean> {

    return this.http.post<boolean>(`${this.apiUrl}`, agence);
  }

  getAgence(): Observable<Vol> {
    return this.http.get<Vol>(`${this.apiUrl}`).pipe(map(vol => vol));
  }
}
