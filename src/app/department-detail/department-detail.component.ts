import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  //selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId:number;
  constructor(private route: ActivatedRoute, private router:Router) { }

  /*ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.departmentId = id;
  }*/

  ngOnInit(){
    this.route.params.subscribe((params: Params)=>{
      let id = parseInt(params['id']);
      this.departmentId = id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', { id: selectedId, random:"random" }]);
    this.router.navigate(['..', { id: selectedId }]);
  }

}
