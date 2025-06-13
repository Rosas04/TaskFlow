import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso',
  imports: [CommonModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
activeTab = 'Clases';


  setTab(tab: string) {
    this.activeTab = tab;
  }
}