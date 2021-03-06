import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient,private router:Router,private enrollmentService:EnrollmentServiceClient
    ,private sectionService:SectionServiceClient,private courseService:CourseServiceClient) { }

  user: User = new User();
  enrollments=[]
  courses:Course[]=[];

  ngOnInit() {
    this.service.findCurrentUser()
      .then(user=>this.user=user)
      .then(()=>this.enrollmentService.findEnrollments())
      .then(enrollments=>this.enrollments=enrollments)
      .then(()=>this.courseService.findAllCourses())
      .then(courses=>this.courses=courses)
  }

  updateProfile(){
    this.service.updateProfile(this.user)
      .then(()=>this.service.findCurrentUser())
      .then(user=>this.user=user)
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

  unenroll(enrollment){
    this.sectionService.unenrollStudent(enrollment.section._id)
      .then(()=>this.enrollmentService.findEnrollments())
      .then(enrollments=>this.enrollments=enrollments);
  }

}
