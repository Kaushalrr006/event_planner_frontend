import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>('https://backend-eventapp.onrender.com/get');
  }
  updateCardStatus(cardId: string, newStatus: string): Observable<any> {
    const body = { status: newStatus }; // Send the new status in the request body
    console.log('cardId in service', cardId);
    // Send a PATCH request to update the card's status
    return this.http.patch(`https://backend-eventapp.onrender.com/update/${cardId}/status`, body);
  }
  deleteEvent(cardId: string): Observable<any> {
    
    return this.http.delete(`https://backend-eventapp.onrender.com/delete/${cardId}`);
  }
}
 




