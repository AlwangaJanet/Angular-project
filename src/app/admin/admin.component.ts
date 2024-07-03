import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ManageHotelsComponent } from './hotels/manage-hotels/manage-hotels.component';
import { ManageToursComponent } from './tours/manage-tours/manage-tours.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ManageHotelsComponent,ManageToursComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
