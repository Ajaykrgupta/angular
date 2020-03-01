import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

   empForm = new FormGroup({
       empname: new FormControl('Ajay'),
       empemail: new FormControl(),
       empaddress: new FormGroup({
        empstreet: new FormControl(),
        empcity: new FormControl(),
        emppostalcode: new FormControl()
       })
    });
    onSubmitEmp(){
      console.log(this.empForm.value);
    } 
  // constructor() { }

  ngOnInit() {
  }

}
