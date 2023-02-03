import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pilaCoin } from '../model/pilacoin';
import { colegas } from '../model/colegas';

@Injectable({
  providedIn: 'root'
})
export class PilacoinService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private readonly API_URL = 'http://localhost:8080';


  startMineracao(): Observable<String> {
    return this.httpClient.post<String>(this.API_URL+'/api/start', '');      
  }

  stopMineracao(): Observable<String> {
    return this.httpClient.post<String>(this.API_URL+'/api/stop', '');      
  }

  getMeusPilas():  Observable<pilaCoin[]>{
    return this.httpClient.get<pilaCoin[]>(this.API_URL+'/api/buscarPila'); 
  }

  getNumPilas():  Observable<number>{
    return this.httpClient.get<number>(this.API_URL+'/api/buscarNumPila'); 
  }

  getColegas(): Observable<colegas[]>{
    return this.httpClient.get<colegas[]>(this.API_URL+'/api/colegas');
  }

}
