import { Component, OnInit } from '@angular/core';
import { EmployeeService }  from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];
  constructor(private _employeeServices: EmployeeService) { }

  ngOnInit() {
    //this.employees = this._employeeServices.getEmployees();
    this._employeeServices.getEmployees()
      .subscribe(resEmployeeData => this.employees = resEmployeeData);

  }

}
