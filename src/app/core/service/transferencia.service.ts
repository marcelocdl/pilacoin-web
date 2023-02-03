import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from '../model/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {


  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(
    private httpClient: HttpClient
  ) { }


 
  transferirPila(transacao: Transacao): Observable<String> {   
    return this.httpClient.post<String>(this.API_URL+'transferencia', transacao);      
  }
}