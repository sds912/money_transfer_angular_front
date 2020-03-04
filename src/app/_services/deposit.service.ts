import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Deposits } from '../_models/deposits';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private http: HttpClient) { }

  saveDeposit(deposit: Deposits)
  {
    return this.http.post(`${environment.apiUrl}/deposits`, deposit);
  }

  findByCreator(email: string)
  {
    const params = new HttpParams().set('creator.email', email);
    return this.http.get(`${environment.apiUrl}/deposits`, {params});
  }
}
