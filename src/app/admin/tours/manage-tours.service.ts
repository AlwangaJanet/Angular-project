import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class ManageToursService {
  private apiUrl = 'http://localhost:4000/tours'; 

  constructor(private http: HttpClient) { }

  // Fetch all tours
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  // Add a new tour
  addTour(newTour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiUrl, newTour);
  }

  // Update an existing tour
  updateTour(updatedTour: Tour): Observable<Tour> {
    const url = `${this.apiUrl}/${updatedTour.id}`;
    return this.http.put<Tour>(url, updatedTour);
  }

  // Delete a tour by ID
  deleteTour(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
