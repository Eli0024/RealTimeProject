import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from "../../header/header.component";


@Component({
  selector: 'app-exporda',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  templateUrl: './exporda.component.html',
  styleUrl: './exporda.component.css'
})
export class ExpordaComponent {

}
