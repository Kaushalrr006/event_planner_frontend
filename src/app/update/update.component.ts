import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit { 
 cardId: string;
 event: string;
  title: string;
  description: string;

 constructor(private route: ActivatedRoute, 
private eventService: EventService,  private router: Router){}

  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cardId = params.get('cardId');
    });
  }

  onEdit( cardId: string){
    console.log(cardId);
   let bodyData = {
    "title": this.title,
    "description": this.description,
   };
   this.eventService.updateEvent(cardId, bodyData).subscribe((resultData: any) =>{
   alert("event updated!")
   this.title = "";
   this.description = "";
   this.router.navigate(['/']);

   })
  }

}
  
