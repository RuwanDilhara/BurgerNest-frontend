import { Component } from '@angular/core';
import { StaffNavbarComponent } from "../../components/staff-navbar/staff-navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-main-dashboard',
  imports: [StaffNavbarComponent ,RouterOutlet],
  templateUrl: './staff-main-dashboard.component.html',
  styleUrl: './staff-main-dashboard.component.css'
})
export class StaffMainDashboardComponent {

}
