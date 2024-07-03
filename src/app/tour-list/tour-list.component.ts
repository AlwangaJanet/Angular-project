import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Tour } from '../models/tour.model';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService) {} 

  ngOnInit() {
    this.tourService.getTours().subscribe((tours) => {
      this.tours = tours;
    })
  }
}
