import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:TopicServiceClient) {
    this.router.params.subscribe(params=>this.setParams(params))
  }

  ngOnInit() {
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics=[]

  setParams(params){
      this.courseId=params['courseId'];
      this.moduleId=params['moduleId'];
      this.lessonId=params['lessonId'];
      this.topicId=params['topicId'];
      this.loadTopics(this.courseId,this.moduleId,this.lessonId);

  }

  loadTopics(courseId,moduleId,lessonId){
      this.service.findAllTopics(courseId,moduleId,lessonId)
        .then((topics)=>this.topics=topics)
        .then(()=>console.log(this.topics))
  }

}
