import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventList: any[] = [];
  inProgress: any[]=[];
  done: any[] = [];
  constructor(private eventService: EventService) {

  }
  ngOnInit(): void {
    this.loadAllEvents();
  }
  loadAllEvents() {
    this.eventService.getEvents().subscribe((result: any) => {
      console.log(result)
      this.eventList = result.data;
    })
  }

  drop(event: CdkDragDrop<any[]>, targetStatus: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const cardToMove = event.previousContainer.data[event.previousIndex];
      cardToMove.status = targetStatus;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // api call
    }
  }
}


