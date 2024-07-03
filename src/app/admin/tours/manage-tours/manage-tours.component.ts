import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Tour } from '../../../models/tour.model';
import { ManageToursService } from '../manage-tours.service';

@Component({
  selector: 'app-manage-tours',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './manage-tours.component.html',
  styleUrl: './manage-tours.component.css'
})
export class ManageToursComponent implements OnInit {
  tours: Tour[] = [];
  selectedTour: Tour = { id: '', name: '', description: '', price: 0, imageUrl: '' };
  isEditing = false;

  constructor(private tourService: ManageToursService) { }

  ngOnInit(): void {
    this.fetchTours(); 
  }

  fetchTours(): void {
    this.tourService.getTours()
      .subscribe(tours => this.tours = tours);
  }

  addTour(newTourForm: NgForm): void {
    const newTour: Tour = newTourForm.value;
    this.tourService.addTour(newTour)
      .subscribe(() => {
        this.fetchTours(); 
        newTourForm.resetForm(); 
      });
  }

  updateTour(updatedTourForm: NgForm): void {
    const updatedTour: Tour = updatedTourForm.value;
    this.tourService.updateTour(updatedTour)
      .subscribe(() => {
        this.fetchTours(); 
        updatedTourForm.resetForm(); 
        this.isEditing = false; 
      });
  }

  deleteTour(id: string): void {
    this.tourService.deleteTour(id)
      .subscribe(() => {
        this.tours = this.tours.filter(tour => tour.id !== id); 
      });
  }

  editTour(tour: Tour): void {
    this.selectedTour = { ...tour };
    this.isEditing = true; 
  }

  submitForm(tourForm: NgForm): void {
    if (this.isEditing) {
      this.updateTour(tourForm);
    } else {
      this.addTour(tourForm);
    }
  }

  resetForm(tourForm: NgForm): void {
    tourForm.resetForm();
    this.selectedTour = { id: '', name: '', description: '', price: 0, imageUrl: ''};
    this.isEditing = false;
  }
}