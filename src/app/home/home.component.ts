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
 
  constructor( private eventService: EventService){

  }
  ngOnInit(): void {
    this.loadAllEvents();
  }
  loadAllEvents(){
    this.eventService.getEvents().subscribe((result: any)=>{
      console.log(result)
     this.eventList = result.data;
    })
  }
}

  

  // Define template reference variables for the drop lists
//   @ViewChild('ongoingTasks') ongoingTasks: any;
//   @ViewChild('doneMovieList') doneMovieList: any;

//   onDrop(event: CdkDragDrop<string[]>) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       transferArrayItem(event.previousContainer.data,
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex
//       );
//     }
//   }
// }
