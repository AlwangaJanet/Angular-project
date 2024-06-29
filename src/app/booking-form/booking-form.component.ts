import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from '../models/tour.model';
import { TourService } from '../tour-list/tour.service';
import { HotelService } from '../hotel-list/hotel.service';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {
  tour: Tour | null = null;
  hotel: Hotel | null = null;
  bookingForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService, private hotelService: HotelService) { }

  ngOnInit(): void {
    const tourName = this.route.snapshot.params['name'];
    this.tourService.getTourByName(tourName).subscribe((tour) => {
      if (tour) {
        this.tour = tour;
      } else {
        console.log(`Tour not found: ${tourName}`);
      }
    });

    const hotelName = this.route.snapshot.params['name'];
    this.hotelService.getHotelByName(hotelName).subscribe((hotel) => {
      if (hotel) {
        this.hotel = hotel;
      } else {
        console.log(`Hotel not found: ${hotelName}`);
      }
    });

    this.bookingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormControl('', Validators.required)
    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      console.log(`Booking submitted for ${this.bookingForm.value.name} on ${this.bookingForm.value.date}`);
      alert('Booking submitted successfully!');
      this.router.navigate(['/home']);
    } else {
      alert('Please fill in all required fields!');
    }
  }

  cancelBooking() {
    // Implement cancellation logic here if needed
    // Redirect back to home
    this.router.navigate(['/home']);
  }
}