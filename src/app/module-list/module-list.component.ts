import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';
import {Module} from '../models/module.model.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ModuleServiceClient) {
    this.route.params.subscribe(params=>this.setParams(params))
  }

  modules:Module[]=[];
  courseId;
  moduleId;

  ngOnInit() {
  }

  setParams(params){
    this.courseId=params['courseId'];
    this.moduleId=params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId){
    this.courseId=courseId;
     this.service.findModulesForCourse(courseId)
       .then(modules=>this.modules=modules)
  }

}
