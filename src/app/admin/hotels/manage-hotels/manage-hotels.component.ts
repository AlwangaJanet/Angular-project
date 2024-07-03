import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Hotel } from '../../../models/hotel.model';
import { ManageHotelsService } from '../manage-hotels.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-hotels',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './manage-hotels.component.html',
  styleUrl: './manage-hotels.component.css'
})
export class ManageHotelsComponent implements OnInit {
  hotels: Hotel[] = []
  selectedHotel: Hotel = { id: '', name: '', description: '', location: '', price: 0, imageUrl: '' }
  isEditing = false

  constructor(private hotelService: ManageHotelsService) { }

  ngOnInit(): void {
    this.fetchHotels()
  }

  fetchHotels(): void {
    this.hotelService.getHotels()
      .subscribe(hotels => this.hotels = hotels)
  }

  addHotel(newHotelForm: NgForm): void {
    const newHotel: Hotel = newHotelForm.value
    this.hotelService.addHotel(newHotel)
      .subscribe(() => {
        this.fetchHotels()
        newHotelForm.resetForm()
      })
  }

  updateHotel(updatedHotelForm: NgForm): void {
    const updatedHotel: Hotel = updatedHotelForm.value
    this.hotelService.updateHotel(updatedHotel)
      .subscribe(() => {
        this.fetchHotels()
        updatedHotelForm.resetForm()
        this.isEditing = false
      })
  }

  deleteHotel(id: string): void {
    this.hotelService.deleteHotel(id)
      .subscribe(() => {
        this.hotels = this.hotels.filter(hotel => hotel.id !== id);
      })
  }

  editHotel(hotel: Hotel): void {
    this.selectedHotel = { ...hotel }
    this.isEditing = true
  }

  submitForm(hotelForm: NgForm): void {
    if (this.isEditing) {
      this.updateHotel(hotelForm)
    } else {
      this.addHotel(hotelForm)
    }
  }

  resetForm(hotelForm: NgForm): void {
    hotelForm.resetForm()
    this.selectedHotel = { id: '', name: '', description: '', location: '', price: 0, imageUrl: '' }
    this.isEditing = false
  }
}
