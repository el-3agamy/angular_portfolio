import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projectserve } from '../services/projectserve';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
activeRout = inject(ActivatedRoute) ;
userServe =inject(Projectserve)
projectID =0 ;
data = this.activeRout.params.subscribe(param=>{
  this.projectID = param['id']
}) ;

}
