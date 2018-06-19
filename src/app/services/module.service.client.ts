export class ModuleServiceClient{

  //MODULE_URL="http://localhost:8080/api/course/CID/module";
  MODULE_URL="https://hardik-shah-web-development.herokuapp.com/api/course/CID/module";


  findModulesForCourse(courseId){
    return fetch(this.MODULE_URL.replace("CID",courseId))
      .then(response=>response.json())
  }

}
