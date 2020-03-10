import { Component, OnInit } from '@angular/core';
import { EmployeeService }  from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  errorMsg:string;
  constructor(private _employeeServices: EmployeeService) { }

  ngOnInit() {
    //this.employees = this._employeeServices.getEmployees();
    this._employeeServices.getEmployees()
      .subscribe(resEmployeeData => this.employees = resEmployeeData, resEmployeeError => this.errorMsg = resEmployeeError);

  }

}
