import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Partner } from '../_models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  findAll()
  {
    return this.http.get(`${environment.apiUrl}/partners`);
  }

  savePartner(data: Partner)
  {
     return this.http.post<Partner>(`${environment.apiUrl}/partners`,data);
  }

  findByNinea(ninea: string)
  {
    const params = new HttpParams().set('ninea',ninea);
    return this.http.get(`${environment.apiUrl}/partners`,{params});
  }

  findById(id: number)
  {
    return  this.http.get(`${environment.apiUrl}/partners/${id}`);
  }
}
