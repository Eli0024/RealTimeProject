import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  onFileSelected(event: any) {
    console.log(event.target.files[0].name);
    
    if (this.currentImage === './assets/img/índice.png') {
      const texto = './assets/img/' + event.target.files[0].name;
      this.currentImage = texto;
    } else {
      this.currentImage = './assets/img/' + event.target.files[0].name;
    }
  }
  
  currentImage = './assets/img/índice.png';

  
}


