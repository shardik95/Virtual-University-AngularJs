import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId;
  course:Course = new Course();

  user: User = new User();
  login=true;

  constructor(private route:ActivatedRoute,private service:CourseServiceClient,private userService:UserServiceClient,private router:Router) {
     this.route.params.subscribe(params=>this.loadCourse(params['courseId']))
  }

  ngOnInit() {
    this.userService.findCurrentUser()
      .then(user=>{
        if(user.username!=='NOT FOUND'){
          this.user=user
          this.login=false
        }

      })
  }

  loadCourse(courseId){
    this.courseId=courseId;
    this.service.findCourseById(courseId)
      .then(course=>this.course=course)
  }

  logout(){
    this.userService.logout()
      .then(()=>this.router.navigate(['login']))
  }

}
