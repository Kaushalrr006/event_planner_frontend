import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.3s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class EventCardComponent {
  title: string="";
  description: string="";

  constructor(private eventService: EventService,  private router: Router) { }

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


      this.router.navigate(['/home']);

    });
  }

  
  
}
