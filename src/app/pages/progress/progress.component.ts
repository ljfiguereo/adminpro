import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent {
  // tslint:disable-next-line: no-trailing-whitespace

  progreso1: number = 10;
  progreso2: number = 20;

  constructor() {}

  actualizar(event: number) {
    console.log('Evento', event);
  }
}
