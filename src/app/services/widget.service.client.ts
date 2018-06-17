export class WidgetServiceClient{

  WIDGET_URL="http://localhost:8080/api/topic/TID/widget";

  findWidgetForTopic(topicId){
    return fetch(this.WIDGET_URL.replace("TID",topicId))
      .then(response=>response.json())
  }

}
