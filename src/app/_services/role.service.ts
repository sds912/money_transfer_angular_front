import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Role } from '../_models/role';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RoleService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Role[]>(`${environment.apiUrl}/roles`);
    }
}