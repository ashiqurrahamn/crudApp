import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {


  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
    this.getEmployees();
    // this.employees=[{
    //   "id":1,
    //   "firstName":"Shamim",
    //   "lastName":"Rahman",
    //   "emailId":"shamim@gmail.com"
    // },{
    //   "id":2,
    //   "firstName":"amim",
    //   "lastName":"Rahman",
    //   "emailId":"shamim@gmail.com"
    // }]
  }
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);

  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }




}
