import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }
  departments = [
    {"id": 1, "name": "Angular" },
    {"id": 2, "name": "Node" },
    {"id": 3, "name": "React" },
    {"id": 4, "name": "HTML" },
    {"id": 5, "name": "CSS" },
    {"id": 6, "name": "PHP" },
    {"id": 7, "name": "Java" },
    {"id": 8, "name": "DotNet" },
    {"id": 9, "name": "Javascript" },
    {"id": 10, "name": "Python" },
  ];
  ngOnInit() {
      this.route.params.subscribe((params: Params)=>{
        let id = parseInt(params['id']);
        this.selectedId = id;
      })
  }

  onSelect(department){
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
