import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Eventapp';
  Tasks = [
    'Blade Runner',
    'Cool Hand Luke',
   
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];
  TaskDone: any[] = [ 'Heat',];

  // Define template reference variables for the drop lists
  @ViewChild('ongoingTasks') ongoingTasks: any;
  @ViewChild('doneMovieList') doneMovieList: any;

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
