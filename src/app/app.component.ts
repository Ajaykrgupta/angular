import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`input.ng-invalid{border-left:5px solid red;}
          input.ng-valid{border-left:5px solid green;}`]
})
export class AppComponent {
  title = 'app';
  public childData:string;
  name ="Ajay kumar";
  date = new Date;
  onSubmit(value:any){
    console.log(value);
  }
}
