import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Curso {
  course: string;
  time: string;
}

interface Horario {
  nombre: string;
  dias: {
    name: string;
    slots: Curso[];
  }[];
}

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  horarios: Horario[] = [];
  horarioActivo: Horario | null = null;
  mostrarFormulario = false;
  nuevoNombreHorario = '';
  activeTab = 'Clases';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  agregarHorario() {
    if (this.nuevoNombreHorario.trim()) {
      const nuevoHorario: Horario = {
        nombre: this.nuevoNombreHorario,
        dias: [
        ],
      };
      this.horarios.push(nuevoHorario);
      this.horarioActivo = nuevoHorario;
      this.nuevoNombreHorario = '';
      this.mostrarFormulario = false;
    }
  }

  seleccionarHorario(horario: Horario) {
    this.horarioActivo = horario;
  }

  eliminarHorario(horario: Horario) {
    this.horarios = this.horarios.filter(h => h !== horario);
    if (this.horarioActivo === horario) {
      this.horarioActivo = this.horarios.length > 0 ? this.horarios[0] : null;
    }
  }
}