import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 email: string = "";
 password: string = "";
 
 isLogin: boolean = false;
 erroMessage: string = "";

 constructor(private router: Router, private eventService: EventService){}

 signIn(){
  // console.log(this.email);
  // console.log(this.password);
  
  // let bodyData ={
  //   email: this.email,
  //   password: this.password,
  // };
  // this.eventService.login(bodyData).subscribe((resultData: any) => {
  //   console.log(resultData);
  //   if(resultData.status){
  //     this.router.navigate(['/home']);
  //   }
  //   else{
  //     alert("Incorrect password or email");
  //     console.log("Error Login");
  //   }

  // });
 }
}


