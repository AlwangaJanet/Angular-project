import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private tours: Tour[] = [
    { 
      id: '',
      name: 'Buffalo Springs - Samburu', 
      description: 'Explore the city with our guided tours.',
      price: 1000,
      imageUrl: 'assets/buffaloSprings.jpg'
    },
    { 
      id: '',
      name: 'Camp Ndunda - Embu', 
      description: 'Relax and enjoy the beautiful scenery in enirons of camp Ndunda',
      price: 3500,
      imageUrl: 'assets/campNdunda.jpg'
    },
    { 
      id: '',
      name: 'Camp Ngare - Nanyuki', 
      description: 'Discover breathtaking mountain views.',
      price: 2500,
      imageUrl: 'assets/campNgare.jpg'
    }
  ]

  getTours(): Observable<Tour[]> {
    return of(this.tours)
  }
  getTourByName(tourName: string): Observable<Tour | null> {
    const tour = this.tours.find(t => t.name === tourName);
    return of(tour ?? null);
  }
}
