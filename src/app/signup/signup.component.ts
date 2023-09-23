import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
 name: string = "";
 email: string = "";
 password: string = "";

 constructor(private eventService: EventService) { }
  ngOnInit(): void {}

  signUp(){
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "password": this.password,

    };
    this.eventService.registerUser(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Registerd successfully");

    });
  }
}
