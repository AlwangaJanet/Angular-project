import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels: Hotel[] = [
    { 
      id: '',
      name: 'The Shed Hotel Nakuru', 
      description: 'Experience the best in class service.', 
      location: 'Nakuru, Kenya',
      price: 2000,
      imageUrl: 'assets/theShed.jpg' 
    },
    { 
      id: '',
      name: 'The Croft Hotel', 
      description: 'Affordable and comfortable stays.', 
      location: 'Nakuru, Kenya',
      price: 1500,
      imageUrl: 'assets/theCroft.jpg' 
    },
    { 
      id: '',
      name: 'Safari Beach Hotel Diani', 
      description: 'Stay close to the beach with amazing views.', 
      location: 'Diani, Kenya',
      price: 2500,
      imageUrl: 'assets/safariBeach.jpg' 
    }
  ];

  getHotels(): Observable<Hotel[]> {
    return of(this.hotels);
  }

  getHotelByName(hotelName: string): Observable<Hotel | null> {
    const hotel = this.hotels.find(h => h.name === hotelName);
    return of(hotel ?? null);
  }

}
