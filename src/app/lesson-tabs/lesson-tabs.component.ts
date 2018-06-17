import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';
import {Lesson} from '../models/lesson.model.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:LessonServiceClient) {
     this.route.params.subscribe(params=>this.setParams(params))
  }

  ngOnInit() {
  }

  courseId;
  moduleId;
  lessonId;
  lessons:Lesson[]=[];

  setParams(params){
    this.courseId=params['courseId'];
    this.moduleId=params['moduleId'];
    this.lessonId=params['lessonId'];
    this.loadLessons(this.courseId,this.moduleId)
  }

  loadLessons(courseId,moduleId){
      this.service.findAllLessons(courseId,moduleId)
        .then(lessons=>this.lessons=lessons)
  }


}
