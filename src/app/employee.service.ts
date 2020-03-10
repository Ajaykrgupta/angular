import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private _url:string;
  constructor(private _http: Http) {
    this._url  = 'http://localhost:4200/assets/apidata/employeedata.json';
   }
  getEmployees(){
    return this._http.get(this._url)
    .map((response:Response) => response.json());
  }
}
