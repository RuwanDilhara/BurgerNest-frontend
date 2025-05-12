import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-navbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './staff-navbar.component.html',
  styleUrl: './staff-navbar.component.css'
})
export class StaffNavbarComponent {

}
