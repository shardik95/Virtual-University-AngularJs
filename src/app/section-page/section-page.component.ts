import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.css']
})
export class SectionPageComponent implements OnInit {

  user: User = new User();
  login=true;
  courseId;
  course:Course=new Course();
  sections=[]
  loggedIn=false;

  constructor(private service:UserServiceClient,private router:Router,private route:ActivatedRoute,
              private courseService:CourseServiceClient,private sectionService:SectionServiceClient) {
    this.route.params.subscribe(params=>this.courseId=params['courseId']);
  }

  ngOnInit() {
    this.service.findCurrentUser()
      .then(user=>{
        if(user.username!=='NOT FOUND'){
          this.user=user
          this.login=false
          this.loggedIn=true;
        }

      })

    this.courseService.findCourseById(this.courseId)
      .then(course=>this.course=course)
      .then(()=>this.sectionService.findSectionForCourse(this.courseId))
      .then(sections=>this.sections=sections);
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

  enroll(sectionId){
    this.sectionService.enrollStudent(sectionId)
      .then(()=>this.sectionService.findSectionForCourse(this.courseId))
      .then(()=>this.router.navigate(['profile']))
  }

}
