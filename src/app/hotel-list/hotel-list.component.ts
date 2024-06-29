import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Hotel } from '../models/hotel.model';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = []

  constructor(private hotelService: HotelService) {} 

  ngOnInit() {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels
    })
  }
}