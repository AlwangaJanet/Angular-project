import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { authGuard } from './auth/auth.guard';
import { AdminComponent } from "./admin/admin.component";
import { ManageToursComponent } from "./admin/tours/manage-tours/manage-tours.component";
import { ManageHotelsComponent } from "./admin/hotels/manage-hotels/manage-hotels.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent, FormsModule, CommonModule, BookingFormComponent, TourListComponent, HotelListComponent, RouterModule, RouterOutlet, ReactiveFormsModule, SignUpComponent, LoginComponent, AdminComponent,
        ManageToursComponent, ManageHotelsComponent]
})
export class AppComponent {
  title = 'ToursNg_Project';

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
