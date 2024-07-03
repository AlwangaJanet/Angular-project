import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Hotel } from '../../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class ManageHotelsService {
  private apiUrl = 'http://localhost:4000/hotels'

  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdWIiOiJlYTBjNzU5My0xYjkyLTQ3MjUtODNiNC0yMTkxZGNmZGI0MjQiLCJOYW1lIjoiSmFuZXQgQW55b25hIiwiaXNBZG1pbiI6MSwiaWF0IjoxNzIwMDA5MTkzLCJleHAiOjE3MjAwMTYzOTN9.cwem57S_6KZVJA2GMfmSjtH_ieljqoZIgFCUBKpe3Tc';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    })
  }

  // Fetch all hotels
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(
        catchError(error => throwError(error))
      );
  }

  // Add a new hotel
  addHotel(newHotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, newHotel, { headers: this.getHeaders() })
      .pipe(
        catchError(error => throwError(error))
      );
  }

  // Update an existing hotel
  updateHotel(updatedHotel: Hotel): Observable<Hotel> {
    const url = `${this.apiUrl}/${updatedHotel.id}`;
    return this.http.put<Hotel>(url, updatedHotel, { headers: this.getHeaders() })
      .pipe(
        catchError(error => throwError(error))
      );
  }

  // Delete a hotel by ID
  deleteHotel(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, { headers: this.getHeaders() })
      .pipe(
        catchError(error => throwError(error))
      )
  }
}
