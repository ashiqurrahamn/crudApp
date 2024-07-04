import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/Api/employees";

  constructor(private httpClint: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClint.get<Employee[]>(`${this.baseUrl}`)

  }
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClint.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: Number): Observable<Employee> {
    return this.httpClint.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: Number, employee: Employee): Observable<Object> {
    return this.httpClint.put(`${this.baseUrl}/${id}`, employee);
  }
  deleteEmployee(id: Number): Observable<Object> {
    return this.httpClint.delete(`${this.baseUrl}/${id}`);
  }



}
