import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TutorialsComponent } from './tutorials.component';


const routes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'departments', component: DepartmentListComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: 'reactiveform', component: ReactiveComponent },
    { path: 'templatedrivenform', component: TemplateDrivenComponent },
    { path: 'miscellaneous', component: MiscellaneousComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents = [TutorialsComponent,ReactiveComponent,EmployeeListComponent,EmployeeDetailComponent, DepartmentListComponent,HomeComponent,TemplateDrivenComponent,MiscellaneousComponent ]