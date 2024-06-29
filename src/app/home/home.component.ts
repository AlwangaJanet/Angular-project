import { Component } from '@angular/core';
import { TourListComponent } from "../tour-list/tour-list.component";
import { HotelListComponent } from "../hotel-list/hotel-list.component";
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TourListComponent, HotelListComponent, AppComponent, RouterModule]
})
export class HomeComponent {
    
  }