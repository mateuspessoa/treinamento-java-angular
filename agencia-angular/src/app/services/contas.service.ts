import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISaqueDeposito } from './../interfaces/saque-deposito';
import { IConta } from './../interfaces/contas';
import { Observable } from 'rxjs';
import { ITransferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  api = environment.api;
  endpoint = 'contas'
  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get(`${this.api}/${this.endpoint}/`)
  }

  saque(saque: ISaqueDeposito): Observable<any> {
    return this.http.put<IConta>(`${this.api}/${this.endpoint}/saque`, saque);
  }

  deposito(deposito: ISaqueDeposito): Observable<any> {
    return this.http.put<IConta>(`${this.api}/${this.endpoint}/deposito`, deposito);
  }

  transferencia(transferencia: ITransferencia) {
    return this.http.put<IConta>(`${this.api}/${this.endpoint}/transferencia`, transferencia);
  }

  save(dados: IConta):Observable<any>{
    return this.http.post<IConta>(`${this.api}`, dados);
  }
}
