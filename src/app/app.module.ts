import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { HomeComponent } from './home/home.component';
// import { TemplateDrivenComponent } from './template-driven/template-driven.component';
// import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
// import { ReactiveComponent } from './reactive/reactive.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
// import { TutorialsComponent } from './tutorials.component';
import { routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    // TutorialsComponent,
    // ReactiveComponent,
    // EmployeeListComponent,
    // EmployeeDetailComponent,
    // DepartmentListComponent,
    // HomeComponent,
    // TemplateDrivenComponent,
    // MiscellaneousComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
    // RouterModule.forRoot([
    //   { path:'home', component: HomeComponent },
    //   { path:'departments', component: DepartmentListComponent },
    //   { path: 'employee', component: EmployeeListComponent },
    //   { path: 'reactiveform', component: ReactiveComponent },
    //   { path: 'templatedrivenform', component: TemplateDrivenComponent },
    //   { path: 'miscellaneous', component: MiscellaneousComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
