import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';
import { RouterLink } from '@angular/router';

// --- Interfaces para el Calendario y Tareas ---
interface CalendarDay {
  number: number | string;
  date?: Date;
  empty: boolean;
}

interface Task {
  title: string;
  time: string;
  date: Date;
}

// Interfaz para tus "recentPages" (si ya la tienes, mantenla)
interface Page {
  icon: string;
  title: string;
}
// --- FIN Interfaces ---

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
      recentPages = [
    { title: 'Patrones de Diseño de ...', icon: '📖' },
    { title: 'Actividad Formativa III', icon: '📖' },
    { title: 'Estructura de Datos', icon: '📖' },
    { title: 'Patrones de Diseño de ...', icon: '📖' },
    { title: 'Actividad Formativa III', icon: '📖' },
    { title: 'Estructura de Datos', icon: '📖' },
    { title: 'Agregar Curso', icon:'+'}
  ];

  upcomingEvents = [

  ];

  // **--- PROPIEDADES DEL CALENDARIO Y TAREAS (MOVIDAS AQUÍ) ---**
  currentDate: Date = new Date();
  currentMonthName: string = '';
  calendarDays: CalendarDay[] = [];
  selectedDay: Date | null = null;

  // Datos de ejemplo para las tareas (pueden estar vacíos o con datos de prueba)
  allTasks: Task[] = [
    { title: 'Tareas/Repaso', time: '10:00a.m.', date: new Date(2025, 4, 26) }, // 26 de mayo de 2025
    { title: 'Metodología Inv. Cien.', time: '6:00p.m.', date: new Date(2025, 4, 26) },
    { title: 'Reunión de equipo', time: '9:00a.m.', date: new Date(2025, 4, 27) },
    { title: 'Presentación proyecto', time: '3:00p.m.', date: new Date(2025, 5, 5) }, // 5 de junio de 2025
  ];
  tasks: Task[] = []; // Tareas para el día seleccionado

  constructor() { }

  ngOnInit(): void {
    // Inicialización del calendario cuando el componente se carga
    // Ajusta la fecha inicial si quieres que siempre empiece en un mes específico
    // Por ejemplo, para que empiece en el mes de mayo de 2025 (como en tu imagen)
    this.currentDate = new Date(2025, 4, 1); // El mes es 0-indexado (0=Enero, 4=Mayo)
    this.generateCalendar();
    this.selectDay(new Date(2025, 4, 26)); // Seleccionar el 26 de mayo por defecto
  }

  // **--- MÉTODOS DEL CALENDARIO Y TAREAS (MOVIDOS AQUÍ) ---**
  generateCalendar(): void {
    this.calendarDays = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    this.currentMonthName = this.getMonthName(month);

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numDaysInMonth = lastDayOfMonth.getDate();

    // Días vacíos al principio del mes para alinear con el día de la semana
    const firstWeekday = firstDayOfMonth.getDay(); // 0 (Domingo) a 6 (Sábado)
    for (let i = 0; i < firstWeekday; i++) {
      this.calendarDays.push({ number: '', empty: true });
    }

    // Días del mes
    for (let i = 1; i <= numDaysInMonth; i++) {
      this.calendarDays.push({ number: i, date: new Date(year, month, i), empty: false });
    }
  }

  getMonthName(month: number): string {
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    return months[month];
  }

  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
    this.filterTasksForSelectedDay(); // Volvemos a filtrar tareas al cambiar de mes
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
    this.filterTasksForSelectedDay(); // Volvemos a filtrar tareas al cambiar de mes
  }

  selectDay(date: Date): void {
    this.selectedDay = date;
    this.filterTasksForSelectedDay(); // Filtrar tareas para el día seleccionado
  }

  isSelectedDay(date: Date): boolean {
    if (!this.selectedDay) return false;
    return (
      date.getFullYear() === this.selectedDay.getFullYear() &&
      date.getMonth() === this.selectedDay.getMonth() &&
      date.getDate() === this.selectedDay.getDate()
    );
  }

  hasEvent(date: Date): boolean {
    return this.allTasks.some(task =>
      task.date.getFullYear() === date.getFullYear() &&
      task.date.getMonth() === date.getMonth() &&
      task.date.getDate() === date.getDate()
    );
  }

  filterTasksForSelectedDay(): void {
    if (this.selectedDay) {
      this.tasks = this.allTasks.filter(task =>
        task.date.getFullYear() === this.selectedDay!.getFullYear() &&
        task.date.getMonth() === this.selectedDay!.getMonth() &&
        task.date.getDate() === this.selectedDay!.getDate()
      );
    } else {
      this.tasks = [];
    }
  }
}