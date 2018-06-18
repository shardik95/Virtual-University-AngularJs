import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {s} from '@angular/core/src/render3';
import {Section} from '../models/section.model.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service:UserServiceClient,private router:Router,private courseService:CourseServiceClient,
              private sectionService:SectionServiceClient) { }

  user: User = new User();
  login=true;
  courses:Course[]=[];
  sections:Section[]=[];
  editDelete=false;
  sectionName="";
  AvailableSeats;
  MaxSeats;
  addClicked=false;
  editClicked=false;
  courseId;
  sectionId;

  ngOnInit() {
    this.service.findCurrentUser()
      .then(user=>{
        if(user.username!=='NOT FOUND') {
          this.user = user
          this.login = false
        }})
      .then(()=>{
          this.courseService.findAllCourses()
            .then(courses=>this.courses=courses)
      }).then(()=>this.sectionService.findAllSections())
      .then(sections=>this.sections=sections)
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

  edit(section,course){
    this.editDelete=true;
    this.sectionName=section.name;
    this.AvailableSeats=section.availableSeats;
    this.MaxSeats=section.maxSeats;
    this.editClicked=true;
    this.addClicked=false;
    this.courseId=course.id;
    this.sectionId=section._id;
  }

  delete(section){
    this.sectionService.deleteSection(section._id)
      .then(()=>this.sectionService.findAllSections())
      .then(sections=>this.sections=sections)
  }

  add(courseID){
    this.addClicked=true;
    this.editDelete=true;
    this.editClicked=false;
    this.courseId=courseID
    this.sectionName="";
    this.AvailableSeats="";
    this.MaxSeats="";

  }

  addSection(){

  var section={
    name:this.sectionName,
    courseId:this.courseId,
    maxSeats:this.MaxSeats,
    availableSeats:this.AvailableSeats,
    students:[]
  }

  this.sectionService.createSection(this.courseId,section)
    .then(()=>this.sectionService.findAllSections())
    .then(sections=>this.sections=sections)

  }

  update(){

    var section = {
      name:this.sectionName,
      courseId:this.courseId,
      maxSeats:this.MaxSeats,
      availableSeats:this.AvailableSeats,
      students:[]
    }

    this.sectionService.updateSection(section,this.sectionId)
      .then(()=>this.sectionService.findAllSections())
      .then(sections=>this.sections=sections)

  }

}
