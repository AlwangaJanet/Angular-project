import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { authGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ManageToursComponent } from './admin/tours/manage-tours/manage-tours.component';
import { ManageHotelsComponent } from './admin/hotels/manage-hotels/manage-hotels.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'adminTours', component: ManageToursComponent },
    { path: 'adminHotels', component: ManageHotelsComponent },
  ]},

  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'tours', component: TourListComponent, canActivate: [authGuard] },
  { path: 'hotels', component: HotelListComponent, canActivate: [authGuard] },
  { path: 'booking/:type/:name', component: BookingFormComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

