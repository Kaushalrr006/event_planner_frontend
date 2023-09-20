import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventCardComponent } from './event-card/event-card.component'; // Adjust the path as needed
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {
   path: '', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'event-card',
    component: EventCardComponent
  },
  {
    path: 'update', component: UpdateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
