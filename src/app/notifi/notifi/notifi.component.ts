import { Component } from '@angular/core';
import { HomeComponent } from "../../home/home.component";

@Component({
  selector: 'app-notifi',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './notifi.component.html',
  styleUrl: './notifi.component.css'
})
export class NotifiComponent {

}
