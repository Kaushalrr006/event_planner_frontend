import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit { 
 eventId: string;
 updateEventData: any= {};
  title: string;
  description: string;

 constructor(private route: ActivatedRoute, 
private eventService: EventService){}

  
  ngOnInit(): void {
  this.route.params.subscribe(params =>{
    this.eventId = params['id'];
  });
  }

  onEdit( eventId: string){
    console.log(eventId);
   let bodyData = {
    "title": this.updateEventData.title,
    "description": this.updateEventData.description,
   };
   this.eventService.updateEvent(eventId, bodyData).subscribe((resultData: any) =>{
   alert("event updated!")
   this.title = "";
   this.description = "";
   })
  }
  
  
}
