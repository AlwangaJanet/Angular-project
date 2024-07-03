import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Tour } from '../../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class ManageToursService {
  private apiUrl = 'http://localhost:4000/tours'

  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdWIiOiJlYTBjNzU5My0xYjkyLTQ3MjUtODNiNC0yMTkxZGNmZGI0MjQiLCJOYW1lIjoiSmFuZXQgQW55b25hIiwiaXNBZG1pbiI6MSwiaWF0IjoxNzIwMDA5MTkzLCJleHAiOjE3MjAwMTYzOTN9.cwem57S_6KZVJA2GMfmSjtH_ieljqoZIgFCUBKpe3Tc';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    })
  }

  // Fetch all tours
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl,{headers:this.getHeaders()})
    .pipe(
      catchError(error=>throwError(error))
    )
  }

  // Add a new tour
  addTour(newTour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiUrl, newTour, {headers:this.getHeaders()})
    .pipe(
      catchError(error=>throwError(error))
    )
  }

  // Update an existing tour
  updateTour(updatedTour: Tour): Observable<Tour> {
    const url = `${this.apiUrl}/${updatedTour.id}`
    return this.http.put<Tour>(url, updatedTour,{headers:this.getHeaders()})
    .pipe(
      catchError(error=>throwError(error))
      )
  }

  // Delete a tour by ID
  deleteTour(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<void>(url,{headers:this.getHeaders()})
    .pipe(
      catchError(error=>throwError(error))
    )
  }
}
