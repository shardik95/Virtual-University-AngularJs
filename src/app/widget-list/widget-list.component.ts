import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';
import {Widget} from '../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:WidgetServiceClient) {
    this.route.params.subscribe(params=>this.setParams(params))
  }

  ngOnInit() {
  }

  topicId;
  widgets:Widget[]=[];

  setParams(params){
    if(params['topicId']!==undefined)
      this.topicId=params['topicId'];
    this.loadWidgets(this.topicId)
  }

  loadWidgets(topicId){
    this.service.findWidgetForTopic(topicId)
      .then(widgets=>this.widgets=widgets);
  }

}
