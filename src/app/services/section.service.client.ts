export class SectionServiceClient{

  SECTION_URL="http://localhost:4000/api/course/CID/section";
  ENROLLMENT_URL="http://localhost:4000/api/section/SID/enrollment"

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

}
