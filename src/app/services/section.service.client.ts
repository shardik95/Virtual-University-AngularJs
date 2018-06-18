export class SectionServiceClient{

  SECTION_URL="http://localhost:4000/api/course/CID/section";

  findSectionForCourse(courseId){
    return fetch(this.SECTION_URL.replace("CID",courseId))
      .then(response=>response.json());
  }

}
