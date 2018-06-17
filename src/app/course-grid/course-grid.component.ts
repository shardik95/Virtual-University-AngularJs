import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  courses:Course[]=[];

  constructor(private service:CourseServiceClient) { }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses=>this.courses=courses)
  }

}
