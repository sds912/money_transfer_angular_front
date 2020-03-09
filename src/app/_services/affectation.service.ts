import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private http: HttpClient) { }


  save(data) {
    return this.http.post(`${environment.apiUrl}/affectations`, data);
  }
}
