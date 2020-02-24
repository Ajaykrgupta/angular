import { Component } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    /*template: `<h1>{{ title }}</h1> 
        <img src="http://lorempixel.com/400/200/"><br/>
        <input type="text" value="Angular"/>
        <p [class.myClass]="applyclass">I am here testing of my class</p>
        <button (click)="onClick(demoInput.value)">Click Me</button>
        <button (mouseover)="onClick($event)">Mouse Over</button>
        <input type="text" #demoInput>
        <input type="text" [(ngModel)]="fname"/>
        <input type="text" [(ngModel)]="lname"/>
        First name  {{ fname }} Last name {{ lname }}
        <p *ngIf="showContent">Show the content</p>
        <div [ngSwitch]="color">
          <p *ngSwitchCase="'red'">Color Red</p>
          <p *ngSwitchCase="'blue'">Color Blue</p>
          <p *ngSwitchDefault>Color is not matched here</p>
        </div>
        <ul>
            <li *ngFor="let color of colors">{{ color }}</li>
        </ul>
        <p [ngClass]="{classOne:cone, classTwo:ctwo}">ngClass Paragraph</p>
        <p [ngStyle]="{'font-style':style, 'font-size':size}">ngStyle Paragraph</p>
        <button (click)="toggle()">Toggle</button>`,*/
    template:`<h2>Child Componet</h2>
            <label>Enter child component value here</label>
            <input type="text" #childtext (keyup)="onChange(childtext.value)"/>
            <p>Value of Parent Component: {{parentData}}</p> 
            `,
    inputs:[`parentData`],
    outputs:[`childEvent`],    
    styles:[`h4{ color:blue;} 
             h1{color:red;}
             .myClass{color:green;}
             .classOne{color:white;}
             .classTwo{background-color:blue;}`]
})

export class TutorialsComponent{
    public title = "Ajay bablu";
    public applyclass = true;
    public fname;
    public lname;
    public showContent = false;
    public color = 'yellow';
    public colors = ['blue', 'red','green','black','yellow','white'];
    public cone = true;
    public ctwo = true;
    public style = 'italic';
    public size = "30px";
    onClick(value){
        console.log(value);
        console.log(this.fname);
        console.log(this.lname); 
    }
    toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo; 
        this.style = '';
        this.size = '14px';   
    }
    public parentData: string;

    childEvent = new EventEmitter<string>();

    onChange(value:string){
        this.childEvent.emit(value);
    }
}
