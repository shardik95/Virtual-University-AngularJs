import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId;
  course:Course = new Course();

  constructor(private route:ActivatedRoute,private service:CourseServiceClient) {
     this.route.params.subscribe(params=>this.loadCourse(params['courseId']))
  }

  ngOnInit() {
  }

  loadCourse(courseId){
    this.courseId=courseId;
    this.service.findCourseById(courseId)
      .then(course=>this.course=course)
  }

}
