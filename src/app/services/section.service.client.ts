export class SectionServiceClient{

  SECTION_URL="http://localhost:4000/api/course/CID/section";
  ENROLLMENT_URL="http://localhost:4000/api/student/section/SID"

  findSectionForCourse(courseId){
    return fetch(this.SECTION_URL.replace("CID",courseId))
      .then(response=>response.json());
  }

  enrollStudent(sectionId){
    return fetch(this.ENROLLMENT_URL.replace("SID",sectionId),{
      method:'post',
      credentials:'include'
    }).then(response=>response.json());
  }

  unenrollStudent(sectionId){
       return fetch(this.ENROLLMENT_URL.replace("SID",sectionId),{
        method:'delete',
        credentials:'include'
      })
  }

  findAllSections(){
    return fetch("http://localhost:4000/api/student/section")
      .then(response=>response.json());
  }

  createSection(courseId,section){
    return fetch(this.SECTION_URL.replace("CID",courseId),{
      method:'post',
      body:JSON.stringify(section),
      headers:{
        'content-type':'application/json'
      }
    })
      .then(response=>response.json());
  }

  deleteSection(sectionId){
    return fetch("http://localhost:4000/api/section/"+sectionId,{
      method:'delete'
    }).then(response=>response.json());
  }

  updateSection(section,sectionId){
    return fetch("http://localhost:4000/api/section/"+sectionId,{
      method:'put',
      body:JSON.stringify(section),
      headers:{
        'content-type':'application/json'
      }
    }).then(response=>response.json());
  }

}
