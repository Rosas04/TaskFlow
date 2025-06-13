import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Curso {
  course: string;
}

@Component({
  selector: 'app-tab-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tab-cursos.component.html',
  styleUrls: ['./tab-cursos.component.css']
})
export class TabCursosComponent {
  cursos: Curso[] = [
    { course: 'Álgebra' },
    { course: 'Literatura' },
    { course: 'Química' }
  ];

  mostrarFormulario = false;

  nuevoCurso: Curso = {
    course: ''
  };

  agregarCurso() {
    const cursoNombre = this.nuevoCurso.course.trim();
    if (cursoNombre) {
      this.cursos.push({ course: cursoNombre });
      this.nuevoCurso.course = '';
      this.mostrarFormulario = false;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  eliminarCurso(index: number) {
    this.cursos.splice(index, 1);
  }
}