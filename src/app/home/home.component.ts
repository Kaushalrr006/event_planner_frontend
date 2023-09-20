import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var particlesJS: any; // Declaration for particlesJS

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventList: any[] = [];
  inProgress: any[] = [];
  done: any[] = [];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllEvents();

    // Initialize particlesJS here
    this.initializeParticlesJS();
  }

  loadAllEvents() {
    this.eventService.getEvents().subscribe((result: any) => {
      // this.eventList = result.data;
      this.eventList = result.todo;
      this.inProgress = result.progress;
      this.done = result.done;

    });
  }

  drop(event: CdkDragDrop<any[]>, targetStatus: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const cardToMove = event.previousContainer.data[event.previousIndex];
      console.log('cardToMove:', cardToMove);
      cardToMove.status = targetStatus;

      this.eventService.updateCardStatus(cardToMove._id, targetStatus).subscribe(() => {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );

      },
      (error)=>{
       console.log('Error updating card status');
       cardToMove.status = event.previousContainer.id;
      }
      );

      // Reinitialize particlesJS after a drop if needed
      this.initializeParticlesJS();
    }
  }

  deleteEvent(cardId: string) {

    this.eventService.deleteEvent(cardId).subscribe(
      () => {
        this.eventList = this.eventList.filter(event => event._id !== cardId);
        this.inProgress = this.inProgress.filter(event => event._id !== cardId);
        this.done = this.done.filter(event => event._id !== cardId);
      },
      (error) => {
        console.error('Error deleting event:', error);
      }
    );
  }




  private initializeParticlesJS() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ff5722' // Particle color
        },
        shape: {
          type: 'circle', // Particle shape
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ff5722',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });

  }
  onEditClick(cardId: string): void {
    console.log(cardId);
    this.router.navigate(['/update/', cardId]);
  }
}

