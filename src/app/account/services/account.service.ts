import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { HttpClient } from '@angular/common/http';
import { Employee, EmployeeAddress } from '../models/employee-account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  API_URL = `${environment.backend_api_url}`;

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.API_URL}/employees/${id}`);
  }

  getAddressByEmployeeId(employeeId: number): Observable<EmployeeAddress> {
    return this.http.get<EmployeeAddress>(`${this.API_URL}/addresses?employeeId=${employeeId}`);
  }
}
