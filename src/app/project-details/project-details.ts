import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
activeRout = inject(ActivatedRoute) ;
projectID =0 ;
data = this.activeRout.params.subscribe(param=>{
  this.projectID = param['id']
}) ;

}
