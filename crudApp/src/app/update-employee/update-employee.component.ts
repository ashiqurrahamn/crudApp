import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit {

  id: Number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }
 
  gotolist() {
    this.router.navigate(['/update-employee', this.id])
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe( data=>{
      this.gotolist();
    },error => console.log(error)
  );
  }

}
