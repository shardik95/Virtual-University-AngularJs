import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service:UserServiceClient,private router:Router,private enrolllmentService:EnrollmentServiceClient,
              private courseService:CourseServiceClient) { }

  user: User = new User();
  login=true;
  enrollments=[];
  coursesEnrolled=[];

  ngOnInit() {
    var c=0;
    this.service.findCurrentUser()
      .then(user=>{
        if(user.username!=='NOT FOUND'){
          this.user=user
          this.login=false
          this.enrolllmentService.findEnrollments()
            .then(enrollments=>this.enrollments=enrollments)
            .then(()=>{
              this.enrollments.map(enrollment=>(
                  this.courseService.findCourseById(enrollment.section.courseId)
                    .then(course=>this.coursesEnrolled[c++]=course)
              ))
            })
        }

      })
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

}
