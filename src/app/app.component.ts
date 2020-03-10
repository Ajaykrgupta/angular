import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`input.ng-invalid{border-left:5px solid red;}
          input.ng-valid{border-left:5px solid green;}
          h1{color:blue;}`],
  providers:[]
})
export class AppComponent implements OnInit{
  title = 'app';
  public childData:string;
  name ="Ajay kumar";
  date = new Date;

  userForm: FormGroup;
  errorMsg:string;
 
  constructor( private _formBuilder: FormBuilder){}
  ngOnInit(){
    this.userForm = this._formBuilder.group({
      name:['ajay', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email:[],
      address:this._formBuilder.group({
        street:[],
        city:[],
        postalcode:[]
      })
    });

    //this.employees = this._employeeServices.getEmployees();
    // this._employeeServices.getEmployees()
    //   .subscribe(resEmployeeData => this.employees = resEmployeeData, resEmployeeError => this.errorMsg = resEmployeeError);


  }

  /*userForm = new FormGroup({
    name: new FormControl('Ajay', Validators.required) ,
    email: new FormControl(),
    address: new FormGroup({
     street: new FormControl(),
     city: new FormControl(),
     postalcode: new FormControl()
    })
 });*/

 //employees = [];
 
}
