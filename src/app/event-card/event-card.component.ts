import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  title: string="";
  description: string="";

  constructor(private eventService: EventService) { }

  onSubmit(){
    console.log("onSubmit")
    let bodyData = {
      "title": this.title,
      "description": this.description,
    };
    this.eventService.addEvent(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Event added successfully")
      this.title="";
      this.description ="";

    });
  }
  
}
