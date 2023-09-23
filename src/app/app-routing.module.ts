import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventCardComponent } from './event-card/event-card.component'; // Adjust the path as needed
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
   path: '', component: LoginComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'event-card',
    component: EventCardComponent
  },
  {
    path: 'update/:cardId', component: UpdateComponent
  },
  {
    path: 'signup', component: SignupComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
