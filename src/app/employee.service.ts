import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1,"name":"Ajay","gender":"Male"},
      {"id":2,"name":"Isa","gender":"Female"},
      {"id":3,"name":"Subodh","gender":"Male"},
      {"id":4,"name":"Chandress","gender":"Male"},
      {"id":5,"name":"Indu","gender":"Female"}
    ];
  }
}
