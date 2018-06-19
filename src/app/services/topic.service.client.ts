export class TopicServiceClient{

 // TOPIC_URL="http://localhost:8080/api/course/CID/module/MID/lesson/LID";
  TOPIC_URL="https://hardik-shah-web-development.herokuapp.com/api/course/CID/module/MID/lesson/LID";

  findAllTopics(courseId,moduleId,lessonId){
    return fetch(this.TOPIC_URL.replace("CID",courseId)
      .replace("MID",moduleId).replace("LID",lessonId))
      .then(response=>response.json())
  }

}
