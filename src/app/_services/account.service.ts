import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  saveAccount(data: Account)
  {
    return  this.http.post<Account>(`${environment.apiUrl}/partners/accounts`,data);
  }

  findByAccountNumber(accountNumber: number)
  {
    const params = new HttpParams().set('accountNumber', accountNumber.toString());

     return this.http.get(`${environment.apiUrl}/partners/accounts`,{params});
  }

  findByCreator(email: string)
  {
   const  params = new HttpParams().set('creator.email',email )
    return this.http.get(`${environment.apiUrl}/partners/accounts`,{params});

  }
}
